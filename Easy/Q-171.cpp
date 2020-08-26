class Solution {
public:
    int titleToNumber(string s) {
        int col = 0, i = 0;
        while(i < s.size()) {
            int val = (int)s[i] - 64;
            col += val * pow(26, (s.size()-i-1));
            i++;
        }
        return col;
    }
};