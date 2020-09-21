/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let sol = [];
    for (let i = 0; i < nums.length; i = i + 2) {
        let freq = nums[i];
        let val = nums[i + 1];
        let arr = new Array(freq).fill(val);
        sol.push(...arr);
    }
    return sol;
};