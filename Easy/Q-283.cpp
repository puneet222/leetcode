class Solution {
public:
    int findNextZero(int index, vector<int> nums) {
        for(int i = index; i < nums.size(); i++) {
            if(nums[i] == 0){
                return i;
            }
        }
        return -1;
    }
    int findNextNonZero(int index, vector<int> nums) {
        for(int i = index; i < nums.size(); i++) {
            if(nums[i] != 0){
                return i;
            }
        }
        return -1;
    }
    void moveZeroes(vector<int>& nums) {
        int count = 0;
        int zero = findNextZero(0, nums);
        int n_zero = findNextNonZero(0, nums);
        // cout << "zero : " << zero << "  non-zero : " << n_zero << endl; 
        while(zero != -1 && n_zero != -1) {
            if(zero < n_zero) {
                count++;
                nums[zero] = nums[n_zero];
                nums[n_zero] = 0;
                n_zero = findNextNonZero(n_zero, nums);
            }
            else {
                n_zero = findNextNonZero(n_zero+1, nums);
            }
            // cout << "zero : " << zero << "  non-zero : " << n_zero << endl;
            zero = findNextZero(zero, nums);
            cout << "operations : " << count << endl;
            
        }
    }
};