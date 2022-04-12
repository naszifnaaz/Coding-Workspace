/*
You are given an array, whose size is stored in a variable with the name N

The array is stored in a variable with the name arr

You have to find the sum of all the elements of the array which are unique.

For example, consider the value stored in N = 7, and the value stored in arr = [3,5,3,3,8,5,6].
Since there are two numbers that are unique i.e 8 and 6.

Then the required output will be 8+6 = 14, which is the required output


Input
The first line of the input contains the value stored in N

The next line containsNspace-separated integers denoting the value stored in arr


Output
Print thesum of all the elements of the array which are unique.

Sample Input 1              Sample Output 1
7
3 5 3 3 8 5 6                      14
*/

function appearOnce(N, arr) {
    var map = {};
    var sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        key = arr[i];
        if(map[key] == undefined)
            map[key] = 1;
        else
            map[key] = map[key] + 1;
    }

    for(key in map)
    {
        if(map[key] == 1)
            sum += Number(key);
    }
    console.log(sum);
}

var arr = [3,5,3,3,8,5,6]
appearOnce(7,arr);