/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let results = [];

    for (i = 0; i <= nums.length; i++){
        for(j = i; j <=nums.length; j++) {
            let tempTarget = nums[i] + nums[j];

            if(tempTarget === target && i !== j) {
                results.push(i, j)
            }
        }
        // let tempTarget = nums[i] + nums[i+1]

        // if (tempTarget === target) {
        //     results.push(i, i+1)
        // }   
    }

    return results;
};

