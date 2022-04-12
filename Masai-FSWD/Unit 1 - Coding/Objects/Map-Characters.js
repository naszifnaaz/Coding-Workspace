/*
You are given a number stored in a variable with the name N

You have to print the first N English smaller case alphabets, mapped with the values starting from 1 toN, including the value stored inN

For example, consider the value stored in N = 3, then the required output will be

a-1
b-2
c-3
Note : The value stored in N will always be less than or equal to 26, and greater than 0 

Sample Input 1              Sample Output 1

5                              a-1
                               b-2
                               c-3
                               d-4
                               e-5
*/

function mapChar(N)
{
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var map = {};

    for(let i = 0; i < N; i++)
    {
        map[lower[i]] = i+1;
    }

    for(key in map)
        console.log(key+ "-" + map[key]);
}


mapChar(5);