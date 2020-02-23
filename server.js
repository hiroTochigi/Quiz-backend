const express = require("express");

const app = express();

//midlleware
app.use((req, res, next) =>{
    console.log("hello")
    next()
})

//get request in root
app.get("/", (req, res) => {
    res.send("<h1>hello</h1>");
})

//get request in profile
app.get("/profile/", (req, res) => {
    res.send("get profile");
})

//post request in profile
app.post("/profile/", (req, res) => {
    const user = {
        name: "Sarah",
        hobby: "1Life1Hour"
    }
    res.send(user)
})


app.listen(3000);