

document.getElementById('deleteCommentForm').addEventListener('submit', (event) => {
    event.preventDefault()
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id'); //used in the url
    console.log(id)

         
        //how am i getting the id for the below postId
         let urlTwo = `http://127.0.0.1:3000/comments/${id}`;
         console.log(urlTwo)
        fetch(urlTwo, {
            method: 'DELETE',
            credentials: 'omit',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error('Error:', error)); 
    


    window.location.href = 'index.html'; 
})

