/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
     let idx = m;
    for (let i = 0; i < n; i++) {
        nums1.splice(idx, 1, nums2[i]);
        idx++;
    }
    
    nums1.sort((a, b) => a - b);
};