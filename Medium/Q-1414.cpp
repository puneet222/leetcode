class Solution {
public:
    int findMinFibonacciNumbers(int k) {
        int i = 2;
        vector<long> fibo {1,1};
        long next = fibo[0] + fibo[1];
        while(next <= k) {
            fibo.push_back(next);
            next = fibo[i] + fibo[i-1];
            i++;
        }
        i = fibo.size() - 1;
        int count = 0;
        while(i >= 0) {
            long num = fibo[i];
            count += k / num;
            k %= num;
            if(k == 0) break;
            i--;
        }
        return count;
    }
};