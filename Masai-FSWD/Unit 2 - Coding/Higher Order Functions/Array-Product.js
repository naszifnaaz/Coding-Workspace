
//Given an array of numbers print the product of all numbers

var arr = [2,3,4,5];

var product = arr.reduce(function(ac,el)
{
    return ac * el;
})

console.log(product);