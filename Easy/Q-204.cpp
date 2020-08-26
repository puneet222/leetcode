class Solution {
public:
    int countPrimes(int n) {
        /* Sieve of Eratosthenes */
        vector<int> nums ;
        int count = 0;
        for(int i = 2; i < n; i++) {
            nums.push_back(i);
        }
        for(int i = 0; i < nums.size(); i++) {
            if(nums[i] > 0) {
                count++;
                for(int j = i + nums[i]; j < nums.size(); j=j+nums[i]) {
                    nums[j] = nums[j] < 0 ? nums[j] : -nums[j];
                }
            }
        }
        return count;
    }
};