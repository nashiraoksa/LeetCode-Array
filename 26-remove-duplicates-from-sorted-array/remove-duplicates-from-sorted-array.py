class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        unique = []

        for i in set(nums):
            unique.append(i)

        nums[:] = sorted(unique)

        return len(nums)
        