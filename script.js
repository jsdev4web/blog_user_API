
const url = 'http://127.0.0.1:3000/posts'
console.log(url)

fetch(url)
    .then(response => response.json())
    .then(data => {
        //console.log(data)

        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("id", "mainDiv")

        document.body.append(mainDiv);
        let ulist = document.createElement("ul");
        mainDiv.appendChild(ulist)

        data.forEach(item => {

            const listItem = document.createElement('li');
            listItem.setAttribute('id', 'liItem')
            const btn = document.createElement('button');
            btn.setAttribute('id', 'commentBtn')

            listItem.innerHTML = ` 
            title: ${item.title} <br>
            content: ${item.content} <br>
           <a href="singlePost.html?id=${item.id}"><button>View Comments</button></a>
           `

              /* listItem.innerHTML =   "Title: " + item.title + 
            "<br>" + "Content: " + item.content + 
            "<br>" + "View Comments: "  */

            ulist.appendChild(listItem)
        })
    })