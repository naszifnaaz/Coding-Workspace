/*
You are given an array, stored in a variable with the size arr

The size of the array is stored in a variable with the name n

You have to find the count of 0's ,1's and 2's

For example, consider the array as arr = [0 1 0 2 1 2 0 1 2 0], and the value stored in n = 10

Then, the required output will be4 3 3, as no. of 0's are 4, no. of 1's are 3, and no. of 2's are 3.


Input
The first line of the input contains the value stored inN, the size of the array

The next line containsNspace separated numbers denoting the elements of the array


Output
Print the count of 0's, 1's and 2's separated with space as shown in the problem statement.


Sample Input 1                  Sample Output 1
10
0 1 0 1 1 1 0 2 2 0                4 4 2

*/

function countZerosOnesTwos(N,arr){
    var c0 = 0, c1 = 0, c2 = 0;
    for(let i = 0; i < N; i++)
    {
        if(arr[i] == 0)
            c0++;
        if(arr[i] == 1)
            c1++;
        if(arr[i] == 2)
            c2++;
    }
    console.log(c0,c1,c2);
}

arr = [0,1,0,1,1,1,0,2,2,0] ;
countZerosOnesTwos(10,arr);