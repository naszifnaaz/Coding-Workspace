/*
You are given a number stored in a variable with the name N

You are also, given a string, whose length is stored in a variable with the name K, and the string is stored in a variable with the name str

You have to map all lower case English characters, starting from the value stored in N.

For example, if the value stored in N = 30, then the mapping of the characters will be as follows

a-30
b-31
c-32
d-33
e-34
f-35
g-36
h-37
i-38
j-39
k-40
l-41
m-42
n-43
o-44
p-45
q-46
r-47
s-48
t-49
u-50
v-51
w-52
x-53
y-54
z-55

Finally, you have to print the sum of all the characters, present in the string str, according to the values mapped above

For example, if the value stored in str = "abc", then the required output will be

30 + 31 + 32 = 93, which is the required output
*/

function mapCharAndSum(N,K,str)
{
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var map ={};
    var sum = 0;

    for(let i = 0; i < lower.length; i++)
        map[lower[i]] = N + i;
    
    for(let i = 0; i < K; i++)
    {
        for(key in map)
        {
            if(key == str[i])
                sum += map[key];
        }
    }
    console.log(sum);
}


//Sample input
mapCharAndSum(30,3,"abc");