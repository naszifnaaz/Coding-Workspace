/*
You are given a 2D array, whose dimensions are stored in two variables with the name N and M

The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

The 2D array is stored in a variable with the namearr

For all rows, you have to print the sum of odd elements present in the row

For example, consider the value stored in N = 3,M = 3, and the array is arr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

4  (Odd numbers in the row are, [1,3]. Therefore, the sum becomes 4)
5  (Odd numbers in the row are, [5]. Therefore, the sum becomes 5) 
16 (Odd numbers in the row are, [7,9]. Therefore, the sum becomes 16)

Sample Input 1                 Sample Output

3 3
1 2 3                                4
4 5 6                                5
7 8 9                                16

*/

function oddSumRows(N,M,arr)
{
    for(let i = 0; i < N; i++)
    {
        var sum = 0;
        for(let j = 0; j < M; j++)
        {
            if(arr[i][j] % 2 != 0)
                sum += arr[i][j];
        }
        console.log(sum);
    }
}


//Sample input
var row = 3;
var column = 3;
var arr = [[1,2,3],[4,5,6],[7,8,9]];
oddSumRows(row,column,arr);