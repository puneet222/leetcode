class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        if(digits.size() <= 0) {
            return digits;
        }
        reverse(digits.begin(), digits.end());
        int carry = 1;
        for(int i = 0; i < digits.size(); i++) {
            int nd = digits[i] + carry;
            digits[i] = nd%10;
            carry = nd/10;
        }
        if(carry > 0) {
            digits.push_back(carry);
        }
        reverse(digits.begin(), digits.end());
        return digits;
    }
};