class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if(nums.size() <= 0) {
            return 0;
        }
        int c = nums[0];
        for(int i = 1; i < nums.size(); i++) {
            if(c == nums[i]) {
                nums.erase(nums.begin()+i);
                i--;
            }
            else {
                c = nums[i];
            }
        }
        return nums.size();
    }
};