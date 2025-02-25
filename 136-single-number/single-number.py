class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        s = set()
        dup = []
        
        for n in nums:
            if n in s:
                dup.append(n)
            else:
                s.add(n)
        
        for x in nums:
            if x not in dup:
                return x


        