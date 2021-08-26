
function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => addTable(data))
}

function addTable(users){
    const tBody = document.getElementById('t-body');
    for(let user of users){
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td class="tower">${user.username}</td>
            <td class="tower">${user.email}</td>
        `
        tBody.appendChild(tr);
    }
}

getUsers();




function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => addPost(data))
}

function addPost(posts){
    const postContainer = document.getElementById('post-container');
    for(let post of posts){
        const myPost = document.createElement('div');
        myPost.classList.add('post');
        myPost.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <span class="sub-title">post no.${post.id}</span>
            <p>${post.body}</p>
        `
        postContainer.appendChild(myPost)
    }
}

getPost();