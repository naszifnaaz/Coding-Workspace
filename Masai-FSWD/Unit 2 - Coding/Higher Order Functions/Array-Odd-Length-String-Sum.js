//Given an array of strings print the sum of lengths if the characters in the string are odd
var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];
function isOdd(el)
{
    if(el.length % 2 != 0)
        return true;
    else
        return false;
}

function length(el)
{
    return el.length;
}

function sum(ac,el)
{
    return ac + el;
}

var total = arr.filter(isOdd).map(length).reduce(sum,0);
console.log(total);