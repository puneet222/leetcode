/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    nums.sort((a, b) => a - b);
    let sol = [];
    let sum = nums.reduce((a, v) => a + v, 0);
    let currSum = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        currSum += nums[i];
        sum -= nums[i];
        sol.push(nums[i]);
        if (currSum > sum) {
            break;
        }
    }
    return sol;
};