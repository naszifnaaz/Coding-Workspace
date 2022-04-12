const express = require('express');
const app = express();

app.use(userOnly);

function userOnly(req,res,next)
{ 
    console.log("Before userOnly");
    next();
    console.log("After userOnly");
}

app.get('/users',(req,res) => {
    res.send({route : "/users"});
});

app.use(studentsOnly);

function studentsOnly(req,res,next)
{ 
    console.log("Before StudentOnly");
    next();
    console.log("After StudentsOnly");
}

app.get('/students',(req,res) => {
    res.send({route : "/students"});
})


app.listen(4000,() => {
    console.log("Listening on http://localhost:4000");
});

