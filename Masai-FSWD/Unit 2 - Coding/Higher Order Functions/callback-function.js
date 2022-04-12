//A callback function is a function that is passed as an argument to another function to be "called back" at a later time

//standard way of defining a function
function hello(name)
{
    console.log("Hi,",name);
}

//Alternate way of defining a function
var greeting = function(name)
{
    console.log("Hello,",name);
}

hello("Nasif");
greeting("Naaz");

//Example of callback function
function details(rollno,batch,greeting)
{
    greeting("Nasif Naaz");
    console.log(batch,rollno);
}


details(140,"fw15",greeting);


