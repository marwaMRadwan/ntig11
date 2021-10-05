/*
posts?_limit=10   => userId, id, title, body
https://jsonplaceholder.typicode.com/users  =>  id, name, username
https://jsonplaceholder.typicode.com/todos?_limit=10 => userId, id, title
*/
const commonURL = "https://jsonplaceholder.typicode.com/"
const APIList = [
    {
        txt:"Posts",
        url: `${commonURL}posts`, //https://jsonplaceholder.typicode.com/posts
        dataModel : [ "userId", "id", "title"]
    },
    {
        txt:"Users",
        url: `${commonURL}users`,
        dataModel : [ "name", "id", "username"]
    }
]

const body = document.querySelector('body')
APIList.forEach(api=>{
    btn = document.createElement('button')
    btn.textContent = api.txt
    body.appendChild(btn)
    btn.addEventListener('click', function(e){

        getApiData(api.url, (res, err)=>{
            if(err) return console.log(err)
            console.log(res)
        })
    })
})