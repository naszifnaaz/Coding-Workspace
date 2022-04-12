
//Given an array of numbers, return the elements that have even index (starting the count at 0) and are even

var arr =[2, 4, 5, 3, 6, 8];
let indexes= -1;

function evenIndex(el)
{
    indexes++;
    if(indexes % 2 == 0 && el % 2 == 0)
        return true;
    else
        return false; 
}


var result = arr.filter(evenIndex);
console.log(result);