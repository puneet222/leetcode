class Solution {
public:
    int romanToInt(string s) {
        map<char, int> roman;
        roman['I'] = 1;
        roman['V'] = 5;
        roman['X'] = 10;
        roman['L'] = 50;
        roman['C'] = 100;
        roman['D'] = 500;
        roman['M'] = 1000;
        
        int num = roman[s[0]];
        int prev = num;
        for(int i = 1; i < s.size(); i++) {
            if(roman[s[i]] > prev) {
                num = num - 2*prev + roman[s[i]];
                prev = roman[s[i]];
            }
            else {
                num += roman[s[i]];
                prev = roman[s[i]];
            }
        }
        return num;
    }
};