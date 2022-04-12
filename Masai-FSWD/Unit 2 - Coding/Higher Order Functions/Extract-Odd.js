
// Given an array of numbers extract the numbers which are odd

var arr = [2,3,4,5,6,7,8,9];

var odd = arr.filter(function(element){
    return element % 2 != 0;
})

console.log(odd);