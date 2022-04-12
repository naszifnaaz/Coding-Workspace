/*
You are given a number stored in variable with the name N

You have to map all the lowercase English characters, to a number starting from the value stored in N, and incrementing it by 1 at every step

For example, consider the value stored in N = 30, then the required output will be

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

*/

function mapCharAgain(N)
{
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var map = {};

    for(let i = 0; i < lower.length; i++)
    {
        map[lower[i]] = N + i;
    }

    for(key in map)
    {
        console.log(key+ "-" + map[key]);
    }
}


mapCharAgain(30);