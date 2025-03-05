class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        
        # profit = 0

        # for i in range(len(prices)):
        #     for j in range(i+1, len(prices)):
        #         if profit < (prices[j]-prices[i]):
        #             profit = prices[j]-prices[i]

        # return profit

        min_price = float('inf')
        profit = 0

        for price in prices:
            # Track the minimum price encountered
            min_price = min(min_price, price)

            # Calculate the potential profit if we sell at the current price
            potential_profit = price - min_price

            # Update the maximum profit if the current potential profit is higher
            profit = max(profit, potential_profit)

        return profit
