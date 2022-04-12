/*
You are given four numbers stored in variables with the name,A, B, C and D

Print the result of the following operation

A is greater than B and C is greater than D

Sample Input             Sample Output 1
26 20 30 28                   true

*/

function checkGreater(A,B,C,D)
{
    console.log((A > B) && (C > D));
}

checkGreater(26,20,30,28);