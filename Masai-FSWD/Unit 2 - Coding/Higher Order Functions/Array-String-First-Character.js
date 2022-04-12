
//Given an array of string generate an array with their first characters.

var arr = ["apple", "windows", "ubuntu"];

var first_character = arr.map(function(el){
    return el[0];
})

console.log(first_character);