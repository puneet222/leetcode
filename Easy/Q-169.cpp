class Solution {
public:
    int majorityElement(vector<int>& nums) {
        if(nums.size() == 1) {
            return nums[0];
        }
        map<int,int> m;
        for(int i = 0; i < nums.size(); i++) {
            if(m.find(nums[i]) == m.end()) {
                m[nums[i]] = 1;
            }
            else {
                m[nums[i]]++;
                if(m[nums[i]] > nums.size()/2) {
                    return nums[i];
                }
            }
        }
        return 0;
    }
    
};