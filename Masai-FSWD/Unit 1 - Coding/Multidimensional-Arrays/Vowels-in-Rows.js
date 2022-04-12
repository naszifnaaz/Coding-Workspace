/*
You are given a 2D array, whose dimensions are stored in two variables with the name N and M

The value stored in N denotes the number of rows, and the value in M denotes the number of columns

The 2D array is stored in a variable with the name arr, and contains lower case English characters

You have to print Yes, if any particular row of a 2D array contains at least one vowel, at least print No

For example, consider the value stored in N = 3,M = 2, and the array is arr = [a,b],[c,d],[e,f], then the required output will be

Yes (This row contains the vowel a)
No  (This row does not contains any vowel)
Yes (This row contains the vowel e)


*/

function vowelsInRows(N,M,arr)
{
    for(let i = 0; i < N; i++)
    {
        var flag = false;;
        for(let j = 0; j < M; j++)
        {
            if(arr[i][j] == "a" || arr[i][j] == "e" || arr[i][j] == "i" || arr[i][j] == "o" || arr[i][j] == "u")
                flag = true;
        }

        if(flag == true)
            console.log("Yes");
        else
            console.log("No");
    }
}


var row = 3;
var column = 2;
var arr = [['a','b'],['c','d'],['e','f']];
vowelsInRows(row,column,arr);