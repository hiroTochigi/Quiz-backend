const express = require("express");
const fs = require("fs");
const file = fs.readFileSync("./quiz.txt");

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    data = fs.readFileSync("./quiz.txt")
    quiz_set = JSON.parse(data)
    quiz = { "quiz":{ "word":"quiz", "type":"noun", "meaning":"A test of knowledge, especially a brief, informal test given to students." } }
    quiz_set["quizzes"].push(quiz)
    fs.writeFileSync("./quiz.txt", JSON.stringify(quiz_set))
})

app.get("/makequiz", (req, res) => {
    res.send("quiz")
})

app.post("/makequiz", (req, res) => {
    quiz_set = JSON.parse(file.toString())
    //console.log(quiz_set["quizzes"])
    quiz_set["quizzes"].push(req.body)
    fs.write()
})

app.listen(3000, () => {
    console.log("app is running on port 3000")
})