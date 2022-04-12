/*
You are given a 2D array, whose dimensions are stored in two variables with the name N and M

The value stored in N denotes the number of rows, and the value in M denotes the number of columns

The 2D array is stored in a variable with the name arr

You have to print the sum of elements of the first and last column of the 2D array

For example, consider the value stored in N = 3,M = 3, and the array is arr = [1,2,7],[3,4,6],[5,6,10], then the required output will be

the first column contains elements 1, 3 and 5
the last column contains elements 7, 6 and 10

Total Sum = 1 + 3 + 5 + 7 + 6 + 10 = 32


Input
The first line of the input contains the value stored in N and M

The next N lines contain M values each denoting the value stored in arr


Output
Print th sum of elements of the first and last column present in the 2D Array

Sample Input 1             Sample Output 1

3 3
1 2 7                             32
3 4 6
5 6 10

*/

function sumOfCornerColumns(N,M,arr){
    var sum = 0;
    for(let i = 0; i < N; i++)
    {
        for(let j = 0; j < M; j++)
        {
            if(j == 0 || j == M-1)
                sum += arr[i][j];
        }
    }
    console.log(sum);
}

var arr = [[1,2,7],[3,4,6],[5,6,10]];
sumOfCornerColumns(3,3,arr);