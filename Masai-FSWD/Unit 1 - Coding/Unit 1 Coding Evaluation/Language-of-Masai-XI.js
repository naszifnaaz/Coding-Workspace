/*
You are given a string stored in a variable with the namestr

Also, the length of the string is stored in a variable with the name N

You have to modify the string, such that if the first character of the string is a vowel, then add hulk at the end of the string

Else if the first character of the string is a consonant, then add thor to the end of the string

For example, consider the value stored in N = 5, and str = abced

Now, since the first character of the string is a vowel, therefore, we add hulk to the end of the string

Therefore, the string becomes abcedhulk, which is the required output

Note : The string contains only lowercase characters


Input
The first line of the input contains N, the length of the string

The next line contains the value stored in str


Output
Print the modified string as explained in the problem statement

Sample Input 1         Sample Output 1
5
abced                      abcedhulk

*/

function languageOfMasaiXI(N, str){
	var vowel = "aeiou";
	var new_str = "";
	var flag = false;
	
	for(let j = 0; j < vowel.length; j++)
	{
	    if(str[0] == vowel[j])
	        flag = true;
	}
	
	if(flag == true)
	    new_str = str + "hulk";
	else
	    new_str = str + "thor";
	
	console.log(new_str);
}

str = "abced";
languageOfMasaiXI(5,str);
