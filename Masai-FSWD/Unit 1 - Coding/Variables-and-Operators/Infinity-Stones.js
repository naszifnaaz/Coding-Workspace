/*
You are given five numbers, stored in variables with the following names

 one, two, three, four, five, six
 The value stored in the variable two, five, six has been doubled, such that if initially the value was 3, it has become 6

The value stored in the variable three, four has been increased three times, such that if initially it was 3, it has become 9

The value stored in the variable one has not been changed.

Find the sum of the updated values stored in one, two, three, four, five, six
*/

function infinityStones(one, two, three, four, five, six)
{
    var result = one + (two * 2) + (three * 3) + (four * 3) + (five * 2) + (six * 2);
    console.log(result);
}

infinityStones(1,2,3,4,5,6);