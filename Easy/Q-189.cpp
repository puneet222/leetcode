class Solution {
public:
    
    void printVector(vector<int> A) {
        for(int n : A) {
            cout << n << " ";
        }
        cout << endl;
    }
    int gcd(int a, int b) { 
        if (a == 0) 
            return b; 
        return gcd(b % a, a); 
    }
    void shiftVector(vector<int> &nums, int k) {
        int index = 0;
        int element = nums[index];
        for(int i = 0; i < nums.size(); i++) {
            index = (index+k) % nums.size();
            int new_element = nums[index];
            nums[index] = element;
            element = new_element;
            // printVector(nums);
        }
    }
    
    void rotate(vector<int>& nums, int k) {
        if(nums.size() == 0 || k == 0) {
            return;
        }
        // cout << "gcd " << nums.size() << " k : " << k  << " -> " << gcd(nums.size(), k) << endl ;
        if((nums.size()%k == 0 || gcd(nums.size(), k) != 1) && k != 1) {
            rotate(nums, 1);
            rotate(nums, k-1);
        }
        else{
            shiftVector(nums, k); 
        }
    }
};