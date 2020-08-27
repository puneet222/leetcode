class Solution {
public:
    double myPow(double x, int n) {
        double result = 1;
        if(n == 0 || x == 1) {
            return result;
        }
        if(x == 0) {
            return 0;
        }
        
        if(x == -1) {
            return n % 2 == 1 ? -1 : 1;
        }
        long nl = n;
        long exp = nl > 0 ? nl : -nl;
        result = exp % 2 == 0 ? myPow(x*x, exp/2) : myPow(x*x, exp/2)*x ;
        return n > 0 ? result : 1/result;
    }
    
};