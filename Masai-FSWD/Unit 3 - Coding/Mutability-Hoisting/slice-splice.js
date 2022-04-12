//Original Array
var arr = [1,2,3,4,5,6,7,8,9,0];

//Array Before Slicing
console.log(arr);

//Slicing the array from index 2 to index 4
console.log(arr.slice(2,4));

//Array after slicing
console.log(arr);

/* 
The slice method returns a copy of an array into a new array, having elements specified from "start" and "end" index.

The original array is not changed in any way, the slice function just return a new copy of the array.

Here the slice() behaves like immutable type, without changing the actual values of the array itself.
*/


//Splicing the array
arr.splice(1,2);
console.log(arr);

/*
The splice() unlike the slice() alters the contents of the array itself.
The original array values is altered after the splice operation.

So here splice() behaves like a mutable type as it alters the contents or values
of the original array itself.
*/


//Defing a const variable / object
const person = {
    name : "Nasif",
    age : 23
}

/*
If we define a const variable / object, we cannot reassign the variable at any 
later point. Once we declare a variable as const, we cannot reassign it, although we can change the actual content of the object
*/

//Changing the actual content of object declared as constant
person.name = "Naaz";
console.log(person);

//To prevent, that we can make use of Object.freeze()

Object.freeze(person);

/*
Once we freeze an object using freeze() we cannot change the actual content of the
object, although we can reassign it.

So combining const and freeze() method would be the best way to give some additional
security to sensitive or more important data, since it cannot be reassigned and one cannot change the actual contents of the object. 
*/
