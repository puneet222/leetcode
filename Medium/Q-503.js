/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let sol = new Array(nums.length).fill(-1);

    if (nums.length === 0) return sol;

    let stack = [0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[stack[stack.length - 1]] < nums[i]) {
            while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
                sol[stack.pop()] = nums[i];
            }
        }
        stack.push(i);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[stack[stack.length - 1]] < nums[i]) {
            while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
                sol[stack.pop()] = nums[i];
            }
        }
    }
    return sol;
};