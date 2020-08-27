/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let count = [0, 0, 0];
    nums.forEach(num => count[num]++);
    let i = 0;
    for (let num = 0; num < 3; num++) {
        let limit = i + count[num];
        while (i < limit) {
            nums[i] = num;
            i++;
        }
    }
    return nums;
};