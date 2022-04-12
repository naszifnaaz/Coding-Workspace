
//Given an array of numbers find the sum of odd elements

var arr = [2,3,4,5,6,7,];

function isOdd(element)
{
    return element % 2 != 0;
}

function sum(ac,el)
{
    return ac + el;
}

var result = arr.filter(isOdd).reduce(sum,0);
console.log(result);