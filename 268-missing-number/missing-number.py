class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        temp = []

        for i in range(0, len(nums)+1):
            temp.append(i)

        for x in temp:
            if x not in nums:
                return x
        