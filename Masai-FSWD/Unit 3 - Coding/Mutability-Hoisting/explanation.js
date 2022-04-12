
//Declaration or Initialisation
var number = 5;

//Reassignment
number = 10;


//Arrays are mutable
var arr = [1,2,3,4,5];
arr[0] = 5;
console.log(arr);

//strings are immutable
var str = "Masai";
str[0] = "N";
console.log(str);


//Objects are mutable
var obj = {
    name : "Nasif",
    age : 23
}



//Hoisting

//Creating phase
var num;
var arr;
var str;


//Execution Phase
num = 10;
arr = [1,2,3,4,5];
str = "Masai";