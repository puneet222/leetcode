class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if(prices.size() == 0) {
            return 0;
        }
        int buying_price = prices[0];
        int profit = 0, total_profit = 0;
        for(int i = 1; i < prices.size(); i++) {
            if(prices[i] < buying_price || prices[i] < (profit + buying_price)) {
                buying_price = prices[i];
                total_profit += profit;
                profit = 0;
            }
            else {
                int new_profit = prices[i] - buying_price;
                if(new_profit > profit) {
                    profit = new_profit;
                }
            }
        }
        total_profit += profit;
        return total_profit;
    }
};