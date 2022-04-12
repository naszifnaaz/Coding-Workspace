/*

You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

The value stored in N denotes the number of rows, and the value in M denotes the number of columns

The 2D array is stored in a variable with the name arr

For all columns, you have to print the sum of odd elements present in the column

For example, consider the value stored in N = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

8  (Odd numbers in the column are, [1,7]. Therefore, the sum becomes 8)
5  (Odd numbers in the column are, [5]. Therefore, the sum becomes 5) 
12 (Odd numbers in the row are, [3,9]. Therefore, the sum becomes 12)

Sample Input 1                 Sample Output

3 3
1 2 3                                 8
4 5 6                                 5
7 8 9                                 12

*/

function oddSumColumns(N,M,arr)
{
    for(let i = 0; i < M; i++)
    {
        var sum = 0;
        for(let j = 0; j < N; j++)
        {
             if(arr[j][i] % 2 != 0)
                sum += arr[j][i];   
        }
        console.log(sum);
    }
}



//Sample input
var row = 3;
var column = 3;
var arr = [[1,2,3],[4,5,6],[7,8,9]];
oddSumColumns(row,column,arr);