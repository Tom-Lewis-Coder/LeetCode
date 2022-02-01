/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
*/

var reverse = function(x) {
    let n = x >= 0 ? Number(x.toString().split('').reverse().join('')) : 
                     Number('-' + x.toString().split('').reverse().slice(0,-1).join(''))
    return n > Math.pow(2,31) || n < (0 - Math.pow(2,31)) ? 0 : n
}