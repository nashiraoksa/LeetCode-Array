class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if(len(nums) == 1 or len(set(nums)) == 1):
            return nums[0]

        tempArr = []

        for i in set(nums):
            tempArr.append(nums.count(i))

        for i in set(nums):
            if(nums.count(i) == max(tempArr)):
                return i


        