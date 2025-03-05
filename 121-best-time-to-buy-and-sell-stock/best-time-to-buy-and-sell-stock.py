class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        min_price = float('inf')
        profit = 0

        for price in prices:
            min_price = min(min_price, price)

            potential_profit = price - min_price

            profit = max(profit, potential_profit)

        return profit
