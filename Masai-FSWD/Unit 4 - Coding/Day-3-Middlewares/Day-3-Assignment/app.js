const express = require('express'); 
const app = express();

app.listen(5000, () => {
    console.log("Listening on port 5000");
});


app.get('/books',allBooks,(req, res) => {
    res.send("Fetching all books...");
});

function allBooks(req,res,next)
{
    console.log("Fetching all books");
    next();
}

app.get('/book/:name',singleBook,(req, res) => {
    res.send({bookName:req.name});
});

function singleBook(req,res,next)
{
    req.name = req.params.name;
    next();
}