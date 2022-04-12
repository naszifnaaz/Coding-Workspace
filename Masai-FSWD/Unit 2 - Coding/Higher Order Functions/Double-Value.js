
//Given an array of numbers generate an array containing the double value of the numbers

var arr = [2,3,6,7,8,9];

var double = arr.map(function(element)
{
    return element * 2;
})

console.log(double);