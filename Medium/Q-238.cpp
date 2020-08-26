class Solution {
public:
    
    void printVector(vector<int> A) {
        for(int n : A) {
            cout << n << " ";
        }
        cout << endl ;
    }
    
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> prev_mul, next_mul, sol;
        int previous = 1, next = 1;
        for(int i = 0; i < nums.size(); i++) {
            previous *= nums[i];
            prev_mul.push_back(previous);
            next *= nums[nums.size()-(i+1)];
            next_mul.push_back(next);
        }
        reverse(next_mul.begin(), next_mul.end());
        for(int i = 0; i < nums.size(); i++) {
            int newNum = 1;
            if(i == 0) {
                newNum *= next_mul[i+1];
            }
            else if(i == (nums.size()-1)) {
                newNum *= prev_mul[i-1];
            }
            else {
                newNum = prev_mul[i-1]*next_mul[i+1];
            }
            sol.push_back(newNum);
        }
        return sol;
    }
};