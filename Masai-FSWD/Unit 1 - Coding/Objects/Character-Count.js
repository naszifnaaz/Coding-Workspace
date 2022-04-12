/*
Given a string print, the number of times each character appears
*/

function characterCount(str)
{
    var map = {};
    for(let i = 0; i < str.length; i++)
    {
        var key = str[i];
        if(map[key] == undefined)
            map[key] = 1;
        else
            map[key] = map[key] + 1;
    }
    
    console.log(map);
}

characterCount("masai");