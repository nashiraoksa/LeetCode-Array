class Solution(object):
    def buildArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        
        temp = []

        for i in range(0, len(nums)):
            temp.append(nums[nums[i]])

        return temp