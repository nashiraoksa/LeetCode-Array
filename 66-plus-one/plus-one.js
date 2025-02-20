/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num;

    if(digits.length < 9){ 
        num = parseInt(digits.join(''));    
        num = num + 1;
    }else {
        num = BigInt(digits.join(''));    
        num = num + BigInt(1);
    }



    let arr = num.toString().split('').map(Number);
    
    return arr;
};