/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let i = 0, j = n;
    let sol = [];
    while (j < nums.length) {
        sol.push(nums[i], nums[j]);
        i++;
        j++;
    }
    return sol;
};