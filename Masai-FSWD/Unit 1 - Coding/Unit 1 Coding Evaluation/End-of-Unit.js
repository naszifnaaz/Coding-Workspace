/*
It is the end of the unit, and to celebrate you decide to write a code to print the letter E, with the help of the character *

You are given a number stored in a variable with the nameN. You have to make the letter E, with reference to the value stored in N

For example, consider the value stored in N = 5, then the corresponding pattern will be

* * * * *
*
*****
*
* * * * *

Note : The value stored in N, will always be odd

Input
The first and the only line of the input contains the value stored in N

Output
Print the pattern as shown in the problem statement according to the value stored in N

Sample Input 1             Sample Output

5                          * * * * *
                           *
                           *****
                           *
                           * * * * *                    
*/

function endOfUnit(N){
    for(let i = 0; i < N ; i++)
    {
        var bag = "";
        for(let j = 0; j < N; j++)
        {
            if(i == 0 || i == N-1)
                bag += "* ";
            else if(i == Math.floor(N/2))
                bag += "*";
            else if(j == 0)
                bag += "*";
                
        }
        console.log(bag);
    }
}

endOfUnit(5);
