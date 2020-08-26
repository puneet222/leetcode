class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        vector<int>::iterator i = nums1.begin(), j = nums2.begin();
        int rcount = nums1.size() - m;
        vector<int>::iterator it1 = nums1.end() - rcount;
        vector<int>::iterator it2 = nums1.end();
        nums1.erase(it1,it2);
        while(i < nums1.end() && j < nums2.end()) {
            if(*i > *j) {
                // insert and increment j
                nums1.insert(i, *j);
                j++;
            }
            else {
                // increment i
                i++;
            }
        }
        if(j < nums2.end()){
            for(vector<int>::iterator i = j ; i < nums2.end(); i++) {
                nums1.push_back(*i);
            }
        }
    }
};