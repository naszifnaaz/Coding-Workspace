/*
You are given an array stored in a variable with the name arr.

The size of the array is stored in a variable with the name N.

You have to find the value of c1,c2,c3 and c4 in the array, such that

 c1 is the number of elements in the array divisible by 4

 c2 is the number of elements in the array divisible by 2

 c3 is the number of elements in the array divisible by 3

 c4 is the number of elements in the array which are not divisible by 4,2 and 3
Finally, you have to print the value of c1,c2,c3 and c4 on a single line

For example, consider the value stored in N = 4, and arr = [1 2 3 4]

Now, the number of elements divisible by 4 is 1. Thus, c1 = 1

Numberof elements divisible by 2 is 2.Thus, c2 = 1

Numberof elements divisible by 3, is 1.Thus, c3 = 1

Numberof elements not divisible by 2,3 and 4 is 1. Thus, c4 = 1

Therefore, the required output is 1 1 1 1

*/

function arrayTransversalAndCondition(N, arr){
	var c1 = 0, c2 = 0, c3 = 0, c4 =0;
	for(let i = 0; i < N; i++)
	{
	    if(arr[i] % 4 == 0)
	        c1++;
	    else if(arr[i] % 2 == 0)
	        c2++;
	    else if(arr[i] % 3 == 0)
	        c3++;
	    else
	        c4++;
	}
	console.log(c1,c2,c3,c4);
}

arr = [1,2,3,4];
arrayTransversalAndCondition(4,arr);