/*
You are given a 2D array, whose dimensions are stored in two variables with the name N and M

The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

The 2D array is stored in a variable with the name arr

For all columns, you have to print the sum of even elements present in the column

For example, consider the value stored in N = 3,M = 3, and the array is arr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

4  (Even numbers in the column are, [4]. Therefore, the sum becomes 4)
10 (Even numbers in the row are, [2,8]. Therefore, the sum becomes 10) 
6  (Even numbers in the row are, [6]. Therefore, the sum becomes 6)

Sample Input 1                           Sample Output

3 3
1 2 3                                           4
4 5 6                                          10
7 8 9                                           6   

*/

function evenSumColumns(N,M,arr)
{
    for(let i = 0; i < M; i++)
    {
        sum = 0;
        for(let j = 0; j < N; j++)
        {
            if(arr[j][i] % 2 == 0)
                sum += arr[j][i];
        }  
        console.log(sum);
    }
}


//Sample input
var row = 3;
var column = 3;
var arr = [[1,2,3],[4,5,6],[7,8,9]];
evenSumColumns(row,column,arr);