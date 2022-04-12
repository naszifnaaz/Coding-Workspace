
//Given an array of string generate an array whose first or last character is a


var arr = ["apple", "windows", "ubuntu", "cola", "system"];

var pattern = arr.filter(function(el){
    if(el[0] == "a" || el[el.length-1] == "a")
        return true;
    else 
        return false;
})

console.log(pattern);