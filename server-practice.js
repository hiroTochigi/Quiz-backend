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


//get request in root to get html
app.get("/", (req, res) => {
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
    console.log(req.body)
})


app.listen(3000);