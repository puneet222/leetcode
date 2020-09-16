class Solution {
public:
    
    map<int, int> m;
    
    struct numPower {
        int num;
        int power;
    };
    
    static bool compare(const numPower &a, const numPower &b) {
        if(a.power == b.power) {
            return a.num < b.num;
        } else {
            return a.power < b.power;
        }
    }
    
    int getKth(int lo, int hi, int k) {
        m[1] = 0;
        vector<numPower> v;
        for(int i = lo; i <= hi; i++) {
            int p = getPower(i);
            numPower np = {
                i,
                p
            };
            v.push_back(np);
        }
        sort(v.begin(), v.end(), compare);
        return v[k-1].num;
    }
    
    int getPower(int num) {
        if(m.find(num) != m.end()) {
            return m[num];
        }
        int power = 1;
        if(num % 2 == 0) {
            power += getPower(num/2);
        } else {
            power += getPower((num*3)+1);
        }
        m[num] = power;
        return power;
    }
};