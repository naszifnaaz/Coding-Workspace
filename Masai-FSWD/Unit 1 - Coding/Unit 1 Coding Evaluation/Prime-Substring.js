/*
You are given a string stored in a variable with the name str

The length of the string is stored in a variable with the name N

You have to print the number of substrings whose length is a prime number are formed using the string str.

For example, we have a string str = abc and N = 3. Therefore substrings formed are

a
ab
abc
b
bc
c

The substrings whose length is prime are ab, abc and bc. Therefore3is the required output


Input
The first line of the input contains the value stored in N

The second line contains the value stored in str


Output
Print the number of substrings whose length is a prime number are formed using the string str.

Sample Input 1      Sample Output 1
6
abcdef                   11
*/

function stringPrime(N ,str){
    var count = 0;
    for(let i = 0; i < N; i++)
    {
        for(let j = i; j < N; j++)
        {
            var bag = "";
            var length = 0;
            for(let k = i; k <= j; k++)
            {
                bag += str[k];
                length = (j-i)+1;
            }
            if(isprime(length))
            {
                count++;
            }
        }
    }
    console.log(count);

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

var str = "abcdef";
stringPrime(6,str);
