/*
You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

The value stored in N denotes the number of rows, and the value in M denotes the number of columns

The 2D array is stored in a variable with the name arr

For all rows, you have to print the sum of even elements present in the row

For example, consider the value stored in N = 3,M = 3, and the array is arr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

2  (Even numbers in the row are, [2]. Therefore, the sum becomes 2)
10 (Even numbers in the row are, [4,6]. Therefore, the sum becomes 10) 
8  (Even numbers in the row are, [8]. Therefore, the sum becomes 8)


Sample Input 1                    Sample Output 1

3 3 
1 2 3                                     2
4 5 6                                     10
7 8 9                                     8

*/


function evenSumRows(N,M,arr)
{
    for(let i = 0; i < N; i++)
    {
        var sum = 0;
        for(let j = 0; j < M; j++)
        {
            if(arr[i][j] % 2 == 0)
                sum += arr[i][j];
        }
        console.log(sum);
    }
}

//Sample input
var row = 3;
var column = 3;
var arr = [[1,2,3],[4,5,6],[7,8,9]];
evenSumRows(row,column,arr);