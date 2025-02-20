/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = BigInt(digits.join(''));    
    num = num + BigInt(1);
    let arr = num.toString().split('').map(Number);
    
    return arr;
};