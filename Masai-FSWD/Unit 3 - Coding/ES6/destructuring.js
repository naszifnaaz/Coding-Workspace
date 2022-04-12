/*
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
*/

var user = {
    name : "Nasif",
    age : 24,
    city : "Pune",
    country : "India"
};

//In legacy javascript
var username = user.name;
var user_age = user.age;
console.log(username,user_age);

//Using ES6 Destructuring 

let {name,age,city} = user;
console.log(name,age,city);

//If we want to change the variable name while destructuring
let {name:alternateName, city:alternateCityName} = user;
console.log(alternateName,alternateCityName);

//Spread (...)  operator 
var color1 = ["red","green","blue"];
var color2 = [...color1, "yellow","violet"];
console.log(color2);

//Rest
function findSum(...a)
{
    var sum = 0;
    for(let i = 0; i < a.length; i++)
        sum += a[i];
    return sum;
}

console.log(findSum(10,20,30));
console.log(findSum(10,20,30,40,50));
console.log(findSum(10,20,30,40,50,60,70));