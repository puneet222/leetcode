class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
         vector<vector<int>> solSet;
        if(nums.size() < 3) {
            return solSet;
        }
        sort(nums.begin(), nums.end());
        for(int i = 0; i < nums.size()-2; i++) {
            if(i-1 > 0 && nums[i-1] == nums[i]) {
                    continue;
            }
            int j = i+1, k = nums.size()-1;
            // cout << "----------" << endl;
            while(j < k) {
                // cout << " j : " << j << " k : " << k << endl;
                int sum = nums[i] + nums[j] + nums[k];
                if(sum == 0) {
                    vector<int> sol= {nums[i],nums[j],nums[k]};
                    solSet.push_back(sol);
                    j++;
                }
                if(sum > 0) {
                    k--;
                }
                if(sum < 0) {
                    j++;
                }
                
            }
        }
        sort(solSet.begin(), solSet.end());
        solSet.erase(unique(solSet.begin(), solSet.end()), solSet.end());
        // for(int i = 0; i < solSet.size(); i++) {
        //     // cout << "in loop " << endl;
        //     if(i+1 < solSet.size() && solSet[i] == solSet[i+1]) {
        //         // cout << "in if";
        //         solSet.erase(solSet.begin()+(i+1));
        //         // cout << "size : " << solSet.size() << endl;
        //         i--;
        //     }
        // }
        return solSet;
    }
};