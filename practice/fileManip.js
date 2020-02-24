const fs = require("fs");

//Asynchroneous
fs.readFile("./hello.txt", (err, data) => {
    if(err){
        console.log("error")
    }
    console.log("1", data.toString())
})

//Sysnchroneous
const file = fs.readFileSync("./hello.txt");
console.log("2", file.toString())

/*
fs.appendFile("./hello.txt", " this is so cool", err => {
    if(err){
        console.log(err)
    }
})*/

fs.writeFile("./bye.txt", "Sad to see you go", err => {
    if(err){
        console.log(err)
    }
})

//Delete
/*
fs.unlink("./bye.txt", err => {
    if (err){
        console.log(err)
    }
    console.log("Inception")
})*/