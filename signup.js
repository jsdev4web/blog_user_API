
document.getElementById("signUpForm").addEventListener('submit', (event) => {
    event.preventDefault()

    let url = `http://127.0.0.1:3000/users`;
    console.log(url)

    //get the signup form
    const signUpForm = document.getElementById('signUpForm')

    //I am not using this but makes form submit into objects
    const commentData = new FormData(signUpForm)
    console.log(commentData)

    console.log(commentData.get('name'))
    console.log(commentData.get('email'))

    let name = commentData.get('name');
    let email = commentData.get('email')


    fetch(url, {
         method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({  name: name, email: email })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error('Error:', error)); 


    window.location.href = 'commentCreate.html'; 
})