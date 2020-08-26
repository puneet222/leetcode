class Solution {
public:
    
    vector<int> getDigits(int n) {
        vector<int> sol;
        while(n != 0) {
            sol.push_back(n%10);
            n /= 10;
        }
        return sol;
    }
    
    bool isHappy(int n) {
        map<int, bool> m;
        m[n] = true;
        // printVec(digits);
        while(1) {
            vector<int> digits = getDigits(n);
            int sum = 0;
            for(auto d: digits) {
                sum += pow(d,2);
            }
            if(sum == 1) {
                return true;
            }
            if(m.find(sum) == m.end()) {
                m[sum] = true;
            }
            else {
                return false;
            }
            n = sum;
        }
        return false;
    }
};