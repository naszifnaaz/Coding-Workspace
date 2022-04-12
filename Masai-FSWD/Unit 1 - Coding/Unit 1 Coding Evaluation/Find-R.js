/*
You are given a numberR. Find the value of R, after doing the following operations:-
1. R is multiplied by 7
2. 15 is added in the new value of R.
3. 5 is subtracted from the new value of R.
4. R is divided by 2 (print floor value).

Sample Input 1          Sample Output 1
    2                              12
*/

function findR(R)
{
    R = (R * 7) + 15 -5;
    R = Math.floor(R/2);
    return R;
}

console.log(findR(2));