// var x = 5

// var x = 15

// var x = 20


// let y = 10

// y = 5

// z = 9

// var z = 15
// const w = 5
// var z = 10
// let status = true
// if(status){
//     var z = 5
//     console.log(z);
// }
// console.log(z)
// let test = prompt('test')


// function getDataFromUser(msg){
//     let data = prompt(msg)
//     return data
// }

// function mathOP(val1, val2, op){
//     let result
//     switch(op){
//         case '+': result =(val1*1.0)+(val2*1.0); break
//         case '*': result = val1*val2; break
//         case '/': result = val1/val2; break
//         case '**': result = val1**val2; break
//         case '-': result = val1-val2; break
//     }
//     return result
// }

// let x = getDataFromUser("x = ")
// let y = getDataFromUser("y = ")
// let ope= ['+','-','/','*']
// ope.forEach( 
//     function(o){
//         console.log(mathOP( x, y, o))
//     }
// )

// let z = [1,5,2,3,6,9,7,4,1,2,58,6,9,75,15,21,5,28]
let y = [
    {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    },
    {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
    },
    {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
    },
    {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
    },
    {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas"
    },
    {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas"
    },
    {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error"
    }
    ]
let x = y
let postWrapper= document.querySelector("#postWrapper")
let ser = document.querySelector('#ser')
function draw(){
    postWrapper.textContent=""
    x.forEach( (item, ind) => {
        li = document.createElement('li')
        li.textContent = ind +  item.title
        postWrapper.appendChild(li)
        // console.log(item.title)
    })
    
}
draw()
ser.addEventListener('input', function(e){
    // e.target.value
    let t = this.value
    // console.log(t)
    x = y.filter(item=>{
    return item.title.includes(t)
})
draw()
})
// let t = x.find((item)=>{
//     return item.title.includes('q')
// })
// console.log(t)

// let tt = x.findIndex(item=>{
//     return item.title.includes('s')
// })
// console.log(tt)

// let ttt = x.filter(item=>{
//     return item.title.includes('s')
// })
// console.log(ttt)


// let tttt = x.every(item=>{
//     return item.title.includes('q')
// })
// console.log(tttt)










































