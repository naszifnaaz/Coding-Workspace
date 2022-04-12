const express = require("express");
const app = express();
let data = [
    {
        book : "Harry Potter",
        author : "JK Rowling",
        genre : "Fiction"
    },
    {
        book : "Atomic Habits",
        author : "James Clear",
        genre : "Personality Development"
    },
    {
        book : "Wings of Fire",
        author : "APJ Abdul Kalam",
        genre : "Autobiography"
    },
    {
        book : "The Incredible Hulk",
        author : "Marvel Comics",
        genre : "Comics"
    }
];

app.listen(5000, () => {
    console.log("Listening on port 5000");
})

app.get("/",(req, res) => {
    res.send("Hello");
});

app.get("/books",(req, res) => {
    res.send(data);
});

// app.get("/books",(req, res) => {
//     res.send({fiction : "Harry Potter",
//     personality : "Atomic Habits",
//     autobiography: "Wings Of Fire",
//     comics: "The Hulk"
// });
// });