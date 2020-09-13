/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sum = [];
    let s = 0;
    nums.forEach(num => {
        s += num;
        this.sum.push(s);
    });
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i === 0) {
        return this.sum[j];
    }
    return this.sum[j] - this.sum[i-1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */