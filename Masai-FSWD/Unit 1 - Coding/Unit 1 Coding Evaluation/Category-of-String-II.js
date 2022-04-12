/*
You are given an array of integers whose size is stored in the variable with the name N

The array is stored in a variable with the name arr

The array contains numbers in the range of [1,26], such that each number represents a small case character, such that

1 refers to a

2 refers to b

3 refers to c
.
.
.
.
.
.
.
z refers to 26
Now, you have to make the string, which is denoted by the numbers present in the array

For example, consider the value stored in N = 4, and arr = [1 2 3 26]

Now, considering the elements of the array,1 = a, 2 = b, 3 = c, 26 = z. Therefore, combining these, we get the new string asabcz,which is the required answer


Input
The first line of the input contains the value stored in N

The next line contains the elements stored in arr


Output
Print the string, by creating it with the help of the elements in the array as shown in the problem statement

Sample Input 1              Sample Output 1

4 
1 2 3 26                            abcz

*/

function categoryOfStringII(size,array){
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var map = {};
    var bag = "";
    
    for(let i = 0; i < lower.length; i++)
    {
        map[lower[i]] = i + 1;
    }
    
    for(let i = 0; i < size; i++)
    {
        for(key in map)
        {
            if(map[key] == array[i])
                bag += key;
        }
    }
    console.log(bag);
}

var arr = [1,2,3,26];
categoryOfStringII(4,arr);