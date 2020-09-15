class Solution {
public:
    int matrixScore(vector<vector<int>>& A) {
        int sum = 0;
        // row modification check most significat bit column
        // i.e. 1st column
        for(int r = 0; r < A.size(); r++) {
            if(A[r][0] == 0) {
                for(int c = 0; c < A[0].size(); c++) {
                    A[r][c] = A[r][c] == 1 ? 0 : 1;
                }
            } 
        }
        
        // column modification
        for(int c = 0; c < A[0].size(); c++) {
            int ones = 0, zero = 0;
            for(int r = 0; r < A.size(); r++) {
                if(A[r][c] == 0){
                    zero++;
                } else {
                    ones++;
                }
            }
            int count = max(zero, ones);
            int power = A[0].size() - 1 - c;
            sum += count * pow(2,power);
        }
        return sum;
    }
};