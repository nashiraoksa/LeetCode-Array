class Solution(object):
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """

        temp = []

        for i in set(nums2):
            if i in nums1:
                temp.append(i)

        return temp
        