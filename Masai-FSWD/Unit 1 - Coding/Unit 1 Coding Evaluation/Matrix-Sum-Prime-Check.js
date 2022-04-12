/*
In this question, you are given a 2D array stored in a variable with the name arr

The number of rows in the matrix is stored in the variable with the name N, while the number of columns stored in the matrix is stored in a variable with the name M

You have to find the sum of matrix and print true or false based on weather that sum is prime or not.

For example, consider the value stored in N = 3, and M = 3, and

N = 3 M = 3

arr = [[1 2 3]
       [4 5 6]
       [7 8 9]]
The sum of elements of matrix is 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45.45 is not a prime number therefore, the required output is false`

Note : The 2D array may contain duplicate elements. Each instance of a prime number should be counted separately

Input
The first line of the input contains the values stored in N and M

The next line contains the values stored in arr


Output
Print true or false based on weather that sum is prime or not.


Sample Input 1      Sample Output 1

3 3
1 2 3                    false
4 5 6
7 8 9
*/

function matrixSumPrimeCheck(N, M, arr){
	var sum = 0;
	for(let i = 0; i < N; i++)
	{
	    for(let j = 0; j < M; j++)
	        sum += arr[i][j];
	}
	
	console.log(isprime(sum));
}

function isprime(num)
{
    if(num == 0 || num == 1)
        return false;
    for(let i = 2; i < num; i++)
        if(num % i == 0)
            return false;
    return true;
}

var arr = [[1,2,3],[4,5,6],[7,8,9]]
matrixSumPrimeCheck(3,3,arr);