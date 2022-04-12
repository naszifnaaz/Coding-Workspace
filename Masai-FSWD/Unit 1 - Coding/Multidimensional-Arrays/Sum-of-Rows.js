/*
You are given a 2D array, whose dimensions are stored in two variables with the name N and M

The value stored in N denotes the number of rows, and the value in M denotes the number of columns

The 2D array is stored in a variable with the name arr

You have to print the sum of all elements in a row, on a new line

For example, consider the value stored in N = 3,M = 2, and the array is arr = [1,2],[3,4],[5,6], then the required output will be

3 (Adding the elements of the row [1,2])
7 (Adding the elements of the row [3,4])
11(Adding the elements of the row [5,6])
*/

function sumOfRows(N,M,arr)
{
    for(let i = 0; i < N; i++)
    {
        var sum = 0;
        for(let j = 0; j < M; j++)
            sum += arr[i][j];
        console.log(sum);
    }
}

//Sample input
var row = 3;
var column = 2;
var arr = [[1,2],[3,4],[5,6]];
sumOfRows(row,column,arr);