class Solution:
    def maxProfit(self, prices: list[int]) -> int:

        start, max_profit = 0, 0
        
        for end in range(1, len(prices)):
            stock_price = prices[end]
            if prices[start]<stock_price:
                max_profit = max(max_profit, stock_price-prices[start])
            else:
                start=end
        return max_profit
