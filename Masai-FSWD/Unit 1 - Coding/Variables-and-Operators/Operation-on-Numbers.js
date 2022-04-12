/*
You are given a number, stored in a variable with the namenumber. Perform the following operations on the value stored in the number

1. Multiply the value by 3
2. Add 7 after it
3. Subtract 10 from it
*/

function operationOnNumbers(number)
{
    var result = (number * 3) + 7;
    result -= 10;
    console.log(result);
}

operationOnNumbers(4);