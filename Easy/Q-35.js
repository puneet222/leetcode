/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            if ((mid + 1) < nums.length) {
                if (nums[mid + 1] > target) {
                    return mid + 1;
                } else {
                    i = mid + 1;
                }
            } else {
                return mid + 1;
            }
        } else {
            if ((mid - 1) >= 0) {
                if (nums[mid - 1] < target) {
                    return mid;
                } else {
                    j = mid - 1;
                }
            } else {
                return 0;
            }
        }
    }
};