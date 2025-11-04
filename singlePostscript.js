
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); //used in the url

console.log(id)

localStorage.setItem('id', id)


const url = `http://127.0.0.1:3000/posts/${id}`
    console.log(url)

fetch(url)
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        let myDiv = document.createElement("div");
        myDiv.setAttribute("id", "myDiv");
        document.body.append(myDiv);
        
        
        //remember that findMany is iterable with forEach
       data.forEach(item => {
          myDiv.innerHTML = `
          Title: ${item.title} <br>
          Content: ${item.content} <br>
          Post Id: ${item.id} <br>
          Add Item: <a href="addComment.html">Add Comment</a>
         `
       })  

      /*  let createComm = document.createElement("div");
       createComm.setAttribute("id", "createComm");
       createComm.innerText = "Add Comment"

       let alink = document.createElement("a");
       alink.href = `addCreate.html${item.id}`
       myDiv.appendChild(alink)
       alink.appendChild(createComm) */
       
    })
    .catch(error => console.log(error))



    const urlTwo = `http://127.0.0.1:3000/comments/post/${id}`
    console.log(urlTwo)

    const ulList = document.createElement("ul");

    fetch(urlTwo)
    .then(response => response.json())
    .then(data => {
        //console.log(data)

        let myDivTwo = document.createElement("div");
        myDivTwo.setAttribute("id", "myDivTwo");
        //myDivTwo.after(myDiv)
        document.body.append(myDivTwo);


        data.forEach(item => {
        const liItem = document.createElement('li');
        liItem.setAttribute("id", "liItem");
        const btn = document.createElement('button');
        btn.setAttribute('id', 'btn');

        liItem.innerHTML = `
        Name: ${item.user.name} <br>
        Comment: ${item.comment}
        Add Item: <a href="deleteComment.html?id=${item.id}">Delete Comment</a>

        `

            ulList.appendChild(liItem)
            myDivTwo.appendChild(ulList)
        })
    })  
    .catch(error => console.log(error))

    
