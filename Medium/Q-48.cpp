class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        if(matrix.size() == 0) {
            return;
        }
        // replace the position
        for(int row = 0; row < matrix.size(); row++) {
            for(int col = row; col < matrix[row].size(); col++) {
                if(row != col) {
                    int temp = matrix[row][col];
                    matrix[row][col] = matrix[col][row];
                    matrix[col][row] = temp;
                }
            }
        }
        // replace columns
        int l = 0, r = matrix.size()-1;
        while(l < r) {
            for(int row = 0; row < matrix.size(); row++) {
                int temp = matrix[row][l];
                matrix[row][l] = matrix[row][r];
                matrix[row][r] = temp;
            }
            l++;
            r--;
        }
    }
};