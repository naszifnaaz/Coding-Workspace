// Importing express
const express = require('express');
const app = express();

// Creating server
app.listen(5000, () => {
    console.log("Listening on port 5000");
});

// Logger Middleware
function logger(req,res,next)
{
    console.log(`path : localhost:5000${req.route.path}`);
    next();
}

// route handlers for /books
app.get('/books',logger,(req,res) => {
    res.send({ route: "/books"});
});

// Checking if it is a valid user for the path
function checkPermission(user)
{
    return function(req, res, next) {
        if(req.route.path == "/libraries" && user == "librarian")
            req.permission = true;
        
        if(req.route.path == "/authors" && user == "author")
            req.permission = true;
        next();
    }
}


//  route handlers for libraries and authors
app.get('/libraries',logger,checkPermission("librarian"),(req,res) => {
    res.send({route : req.route.path , permission : req.permission});
});

app.get('/authors',logger,checkPermission("author"),(req,res) => {
    res.send({route : req.route.path , permission : req.permission});
})


