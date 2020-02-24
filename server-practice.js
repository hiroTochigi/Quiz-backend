const express = require("express");

const app = express();

//midlleware
app.use((req, res, next) =>{
    console.log("hello")
    next()
})
//middleware for form data
app.use(express.urlencoded({extended:false}))

//middleware for json file
app.use(express.json())

app.use(express.static(__dirname + "/public"))


//get request in root to get html
app.get("/hello", (req, res) => {
    res.send("<h1>hello</h1>");
})

//get request in profile to get json file
app.get("/profile/", (req, res) => {
    const user = {
        name: "Sarah",
        hobby: "1Life1Hour"
    }
    res.send(user)
})

//post request in profile
app.post("/profile/", (req, res) => {
    console.log(req.body) //req.body is used to send form data or json data
})

app.get("/query/", (req, res) =>{
    console.log(req.query) //url?name=hiroyuki
    console.log(req.headers)
    console.log(req.params)
    res.send("success")
})

app.get("/params/:id", (req, res) =>{
    console.log(req.params)
    res.status(404).send("not found")
})

app.listen(3000);