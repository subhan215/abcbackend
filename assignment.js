const express = require("express");
const app = express()
const PORT = 3000;

let users = [
    { name: "subhan", id: Math.round(Math.random() *1000) },
    { name: "sufyan", id:Math.round(Math.random() *1000) },
    { name: "zain", id: Math.round(Math.random() *1000) },
    { name: "asif", id: Math.round(Math.random() *1000) },

]
let posts = []

const urlParser = express.json();
app.use(urlParser);

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.send("hello world")
})
app.get("/usersData", (req, res) => {
    res.statusCode = 200;
    res.json(users)
})


app.get("/users/:id", (req, res) => {
    res.statusCode = 200;

    let user = users.find((user) => user.id === parseInt(req.params.id))
    if (user) {
        res.json(user)
    } else {
        return res.send("User not found ");
    }
})
app.delete("/delUser/:id", (req, res) => {
    res.statusCode = 200;

    let filterUsers = users.filter((user) => user.id !== parseInt(req.params.id));
    users = filterUsers;
    res.send("User Delete Successfully")



})
app.post('/create_user', (req, res) => {
    if (req.body.name) {
        let flag = false 
        for(var i = 0 ; i < users.length ; i++) {
            if(users[i].name === req.body.name){
                   flag = true ; 
                   res.send("user already exist") ; 
            }
           
        }
        if(flag === false) {
        res.statusCode = 201;
        let newUser = Math.round(Math.random() *1000);
        users.push({
            name: req.body.name,
            id: newUser
        })
        res.send("User created Successfully") }
    } else {
        res.statusCode = 400 ; 
        res.send("Name Field is missing ") ; 

    }
})
app.put("/update_User/:id" , (req , res) => {
    let user = users.find((user) => user.id === parseInt(req.params.id) ) ; 
    var indexNo;
    for(var i = 0 ; i < users.length ; i++) {

        if(users[i].id === parseInt(req.params.id)){
            indexNo = i
    }}
    user.name = req.body.name ; 
    users.splice(indexNo , 1 , user) 
    res.send("user updated successfully")

})
/// Posts /// 
app.get("/all_Posts" , (req , res) => {
    res.statusCode = 200 ; 
    if(posts.length === 0) {
        return res.send("No post created yet!")
     
    } else {
       res.json(posts)
    }
})
app.post("/create_Post" , (req , res) => {
    if (req.body.name && req.body.price && req.body.text) {
        let flag = false 
        for(var i = 0 ; i < posts.length ; i++) {
            if(posts[i].name === req.body.name){
                   flag = true ; 
                   res.send("post already exist") ; 
            }
           
        }
        if(flag === false) {
        res.statusCode = 201;
        let newPost = Math.round(Math.random() *1000);
        posts.push({
            name: req.body.name,
            price : req.body.price , 
            text : req.body.text , 
            id: newPost
        })
        res.send("post created Successfully") }
    } else {
        res.statusCode = 400 ; 
        res.send("Post Field is missing ") ; 

    }
})
app.delete("/delPost" , (req, res) =>{
    let filterPosts = posts.filter((post) => post.name !== req.body.name)
    posts = filterPosts
    res.send("post deleted successfully")
})
app.put("/updPost" , (req , res) => {
    let post = posts.find((post) => post.name === req.body.name) ; 
    if(req.body.updName) {
        post.name = req.body.updName ; 
    } 
    if(req.body.updPrice) {
        post.price = req.body.updPrice
    } 
    if(req.body.updText) {
        post.text = req.body.updText
    } 
    var indexNo;
    for(var i = 0 ; i < posts.length ; i++) {

        if(posts[i].name === parseInt(req.params.name)){
            indexNo = i
    }}
    
    posts.splice(indexNo , 1 , post )
    res.send("post Updated Successfully")
})
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})
