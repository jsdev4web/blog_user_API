
//Get userid and postid to push a comment to server

let postid = localStorage.getItem('id')
//console.log(postid) works

document.getElementById("getUserName").addEventListener('submit', (event) => {
    event.preventDefault()
    
    const getUserName = document.getElementById('getUserName');
    //console.log(getUserName) works

     //I am not using this but makes form submit into objects
    const usernameData = new FormData(getUserName)
    //console.log(usernameData) works

    let user = usernameData.get('user');
    let id = usernameData.get('id')
    console.log(user)
    console.log(id)

    const myForm = document.getElementById('createCommentForm')


myForm.addEventListener('submit', (event) => {
    event.preventDefault()
    //Stop here // use this STOP point to get user id and post id for below
    let url =  `http://127.0.0.1:3000/comments/${id}/user/${postid}/post`
    //what does the server see when this data comes??
    //create console.logs and track data

    console.log(url)

  
     const formData = new FormData(myForm);
        const user = formData.get('user'); 
        const comment = formData.get('comment');

        console.log(user)
        console.log(comment)
        
     fetch(url, {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({  user: user, comment: comment })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error('Error:', error)); 


    window.location.href = 'index.html';  

    })
})