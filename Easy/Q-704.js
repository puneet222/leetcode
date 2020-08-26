/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return binarySearch(0, nums.length - 1, nums, target);
};

var binarySearch = function (left, right, nums, key) {
    if (left > right) {
        return -1;
    }
    let mid = Math.floor((left + right) / 2);
    if (key === nums[mid]) {
        return mid;
    }
    if (key < nums[mid]) {
        return binarySearch(left, mid - 1, nums, key);
    } else {
        return binarySearch(mid + 1, right, nums, key);
    }
}