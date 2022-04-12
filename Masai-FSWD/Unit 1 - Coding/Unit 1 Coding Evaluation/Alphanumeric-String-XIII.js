/*
You are given an alphanumeric string A, of length N.
print the string that contains all the numbers first, than all the alphabets of that string A, in same order.
For example:-
A = r1h4l and N = 5,
numbers in it are 1,4 and alphabets are r,h,lso output will be:-14rhl
Note: The alphanumeric string, contains numbers from [0,9] and small case characters.

Input
N, the length of the string A.
The next line contains the string itself.

Constraints

1 <= T <= 10

1 <= N <= 100


Output
For each test case, print the string that contains all the numbers first, than all the alphabets of that string A, in same order.

Sample Input 1           Sample Output 1

5 
a123b                          123ab
5
1abc7                          17abc

*/

function alphanumericStringXIII(N, A){
	var bag = "";
	for(let i = 0; i < N; i++)
	{
	    if(A[i] >= 0 && A[i] <= 9)
	        bag += A[i];
	}
	for(let i = 0; i < N; i++)
	{
	    if(A[i] >= "a" && A[i] <= "z")
	        bag += A[i];
	}
	
	console.log(bag);
}

var str = "a123b";
alphanumericStringXIII(5,str);