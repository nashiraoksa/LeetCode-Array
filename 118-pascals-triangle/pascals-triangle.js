/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let tempArr = []

    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            tempArr.push([1]) 
        }else if(i === 1) {
            tempArr.push([1,1])
        }else{
            let arr = []
            for (let j = 0; j <= i; j++){
                if(j === 0) {
                    arr.push(tempArr[i-1][j])
                }else if(j === i) {
                    arr.push(tempArr[i-1][0])
                }else {
                    arr.push(tempArr[i-1][j-1] + tempArr[i-1][j])
                }
            }
            tempArr.push(arr)
        }
    }

    return tempArr;
};