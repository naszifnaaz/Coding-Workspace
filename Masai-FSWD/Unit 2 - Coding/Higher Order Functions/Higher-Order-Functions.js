var arr = [2,3,4,5,6,7,8,9,10];

//ForEach

//Standard Function - By passing the entire function defnition
arr.forEach(function(element){
    console.log(element * element);
})


//Alternate way - Passing function callback
function square(num)
{
    console.log(num * num);
}

arr.forEach(square);