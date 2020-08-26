class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> sol;
        if(numRows == 0) {
            return sol;
        }
        vector<int> first_row = {1};
        sol.push_back(first_row);
        for(int i = 1; i < numRows; i++) {
            vector<int> new_row;
            for(int j = 0; j <= i; j++) {
                int value ;
                if(j == 0) {
                    value = sol[i-1][j];
                }
                else if(j == i) {
                    value = sol[i-1][j-1];
                }
                else {
                    value = sol[i-1][j-1] + sol[i-1][j];
                }
                new_row.push_back(value);
            }
            sol.push_back(new_row);
        }
        return sol;
    }
};