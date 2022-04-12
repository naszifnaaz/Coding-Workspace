//Given an array of numbers find the sum of cubes if the number is divisible by 3
var arr = [1, 2, 3, 4, 5, 6];

function isDivisible(element)
{
    return element % 3 == 0;
}

function Cubes(el)
{
    return el ** 3;
}

function Sum(ac,el)
{
    return ac + el;
}

var total = arr.filter(isDivisible).map(Cubes).reduce(Sum,0);
console.log(total);