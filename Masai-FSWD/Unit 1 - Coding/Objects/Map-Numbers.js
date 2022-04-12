/*
You are given a number stored in a variable with the name N

You are given another number stored in a variable with the name K

You have to map all the numbers in the range of[1, N], including the values stored inN, such that the mapping begins fromK

For example, consider the value stored inN = 5, andK = 10, then the required output will be

1-10
2-11
3-12
4-13
5-14

Sample Input                    Sample Output
5                                   1-10
10                                  2-11
                                    3-12
                                    4-13
                                    5-14
*/

function mapNumbers(N,K)
{
    var count = K;
    var map = {};
    for(let i = 1; i <= N; i++)
    {
        map[i] = count;
        count++;
    }

    for(key in map)
        console.log(key+"-"+map[key]);
}

mapNumbers(5,10);