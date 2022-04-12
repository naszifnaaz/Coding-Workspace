/*
You are given three numbers, stored in variables with the following names
one, two, three

You have to find the square of the three numbers, and find the sum of their square values
Note : Square of a number, is a number multiplied by itself. For example, the square of 3, is 3 * 3 = 9

Sample Input             Sample Output
  1 2 3                       14


In the sample test case, the value stored inone = 1, two = 2, three = 3.

The square of the values stored will be

one = 1 * 1 = 1

two = 2 * 2 = 4

three = 3 * 3 = 9

The resultant sum becomesone + two + three = 1 + 4 + 9 = 14, which is the required answer.
*/

function squareAndSum(one,two,three)
{
    var result = (one * one) + (two * two) + (three * three);
    console.log(result);
}

squareAndSum(1,2,3);