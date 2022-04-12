/*
You are given a number stored in a variable with the name N

You have to map the following symbols starting from the valu eN

The mapping is such that the difference between the values of two characters, is 2

'!','@','#','$','%','^','&','*'

For example, consider the value stored in N = 10, then the required output will be
!-10
@-12
#-14
$-16
%-18
^-20
&-22
*-24
*/

function mapSymbols(N)
{
    var arr =['!','@','#','$','%','^','&','*'];
    var map = {};
    var count = 0;

    for(let i = 0; i < arr.length; i++)
    {
        map[arr[i]] = N + count;
        count += 2;
    }

    for(key in map)
        console.log(key+"-"+map[key]);
}

mapSymbols(10);