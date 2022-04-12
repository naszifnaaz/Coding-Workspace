/*
You are given a 2D array, whose dimensions are stored in two variables with the name N and M

The value stored in N denotes the number of rows, and the value in M denotes the number of columns

The 2D array is stored in a variable with the name arr

You have to print the elements of the 2D array, row by row

For example, consider the value stored in N = 3,M = 2, and the array is arr = [1,2],[3,4],[5,6], then the required output will be 

1 2
3 4 
5 6
*/

function array2D(N,M,arr)
{
    for(let i = 0; i < N; i++)
    {
        var bag = "";

        for(let j = 0; j < M; j++)
            bag += arr[i][j] + " ";

        console.log(bag);
    }
}


//Sample input
var row = 3;
var column = 2;
var arr = [[1,2],[3,4],[5,6]];

array2D(row,column,arr);