class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if(prices.size() == 0) {
            return 0;
        }
        int min_buying_price = prices[0];
        int profit = 0;
        for(int i = 1; i < prices.size(); i++) {
            if(prices[i] < min_buying_price) {
                min_buying_price = prices[i];
            }
            else {
                int new_profit = prices[i] - min_buying_price;
                profit = new_profit > profit ? new_profit : profit;
            }
        }
        return profit;
    }
};