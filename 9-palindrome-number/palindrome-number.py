class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        numStr = str(x)


        if numStr == numStr[::-1]:
            return True
        else:
            return False
        