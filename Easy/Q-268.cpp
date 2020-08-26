class Solution {
public:
    int missingNumber(vector<int>& nums) {
        bool last = false;
        for(int i = 0; i < nums.size(); i++) {
            int index = abs(nums[i]);
            if(index == nums.size()) {
                last = true;
            }
            else {
                nums[index] = -nums[index];
            }
        }
        if(!last) {
            return nums.size();
        }
        else {
          for(int i = 0; i < nums.size(); i++) {
              if(nums[i] > 0) {
                  return i;
              }
          }  
        }
        for(int i = 0; i < nums.size(); i++) {
            if(nums[i] == 0) {
                return i;
            }
        }
        return 0;
    }
};