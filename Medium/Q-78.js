/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let subsets = [];
    for (let i = 0; i < Math.pow(2, nums.length); i++) {
        let cond = createBinary(i, nums.length);
        let set = createSet(nums, cond);
        subsets.push(set);
    }
    return subsets;
};

var createSet = function (nums, condition) {
    let set = [];
    for (let i = condition.length - 1; i >= 0; i--) {
        if (condition[i] === '1') {
            set.push(nums[i]);
        }
    }
    return set;
}

var createBinary = function (num, length) {
    let bin = num.toString(2);
    let diff = length - bin.length;
    while (diff !== 0) {
        bin = '0' + bin;
        diff--;
    }
    return bin;
}