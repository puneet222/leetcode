class Solution {
public:
    bool check(int i, int j, vector<vector<int>> &board) {
        if(i < 0 || i >= board.size()) {
            return false;
        }
        if(j < 0 || j >= board[i].size()) {
            return false;
        }
        return true;
    }
    
    int getLives(int index1, int index2, vector<vector<int>> &board) {
        int lives = 0;
        for(int i = index1-1; i <= index1+1; i++) {
            for(int j = index2-1; j <= index2+1; j++) {
                if(check(i,j,board) && (board[i][j] == 1 || board[i][j] == -1)) {
                    lives++;
                }
            }
        }
        if(board[index1][index2] == 1 || board[index1][index2] == -1) {
            lives--;
        } 
        return lives;
    }
    
    void gameOfLife(vector<vector<int>>& board) {
        for(int i = 0; i < board.size(); i++) {
            for(int j = 0; j < board[i].size(); j++) {
                int lives = getLives(i,j,board);
                if(board[i][j] == 1 || board[i][j] == -1) {
                    if(lives < 2 || lives > 3) {
                        board[i][j] = -1;
                    }
                }
                else {
                    if(lives == 3) {
                        board[i][j] = 2;
                    }
                }
            }
        }
        // update life grid
        for(int i = 0; i < board.size(); i++) {
            for(int j = 0; j < board[i].size(); j++) {
                if(board[i][j] == -1) {
                    board[i][j] = 0;
                }
                if(board[i][j] == 2) {
                    board[i][j] = 1;
                }
            }
        }
     }
};