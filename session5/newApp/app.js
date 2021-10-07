//build in modules
const path = require("path")

//installed packages
const express = require('express')
const hbs = require('hbs')

// define port
const PORT = 3000

//create instance for express
const app = express()

//define use engine
app.set('view engine', 'hbs')

//define folders location
staticFiles = path.join(__dirname, "public") 
viewsFiles = path.join(__dirname, "design/views")
layouts = path.join(__dirname, "design/layouts")

//use files inside app
app.use(express.static(staticFiles))
app.set('views', viewsFiles)
hbs.registerPartials(layouts)

//routes
app.get("", (req,res)=>{ //localhost:3000
    res.render("home", {
        pageTitle:"Home Page"
    })
})
app.get("/table", (req,res)=>{
    data = [
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
    res.render("table", {
        pageTitle: "Table Page",
        data: data
    })
})
app.get("/contact", (req,res)=>{
    res.render("contact", {
        pageTitle: "Contact Page"
    })
})

app.get("*", (req,res)=>{
    res.render("error404", {
        pageTitle: "error 404"
    })
})

// run to server
app.listen( PORT , ()=> console.log(`app on http://localhost:${PORT}`))