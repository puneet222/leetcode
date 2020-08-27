class Solution {
public:
    int maxArea(vector<int>& height) {
        int l = 0, r = height.size() - 1;
        int max_water = INT_MIN;
        while(l < r) {
            int water = (r - l)*min(height[l], height[r]);
            if(height[l] < height[r]) {
                l++;
            }
            else {
                r--;
            }
            if(water > max_water) {
                max_water = water;
            }
        }
        return max_water;
    }
};