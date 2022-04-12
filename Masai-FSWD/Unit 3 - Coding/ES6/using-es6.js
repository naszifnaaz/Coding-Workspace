//Legacy Function
function legacyHello(msg)
{
    console.log(msg);
}
legacyHello("Legacy");


//Arrow Function
const arrowFunction = (msg) =>{
    console.log(msg);
}

arrowFunction("ES6-Function");

/*
New loop in ES6 called the for of loop, which can be used to iterate strings and arrays, without considering the index
*/

var arr = [1,2,3,4,5];
var str = "Masai";

for(el of arr)
    console.log(el);

for(el of str)
    console.log(el);

// Constructor Function
function student(n,a)
{
    this.name = n;
    this.age = a;
    //adding method in properties itself
    this.methodOne = function(){
        return "Method-1";
    }
}

//adding method in prototype instead of properties
student.prototype.methodTwo = function(){
    return "Method-2";
}


var std = new student("Nasif",23);
console.log(std);
console.log(std.methodOne());
console.log(std.methodTwo());

//Implementing inheritance
let std2 = Object.create(std);
console.log("Inherited",std2.name);

//ES6 Classes
class Student{
    constructor(n,a)
    {
        this.name = n;
        this.age = a;
    }
}

var std1 = new Student("Naaz",14);
console.log(std1);
