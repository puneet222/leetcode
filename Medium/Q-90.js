/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    let comb = [];
    let prev = nums[0];
    let arr = [prev];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === prev) {
            arr.push(nums[i]);
        } else {
            comb.push(arr);
            arr = [nums[i]];
            prev = nums[i];
        }
    }
    comb.push(arr);
    const subset = function (set) {
        if (set.length === 0) {
            return [[]];
        }
        let sol = [];
        let prefix = set[0];
        let result = subset(set.slice(1));
        let copy = makeCopy(result);
        sol = [...sol, ...copy];
        for (let i = 0; i < prefix.length; i++) {
            for (let j = 0; j < result.length; j++) {
                result[j].unshift(prefix[i]);
            }
            copy = makeCopy(result);
            sol = [...sol, ...copy];
        }
        return sol;
    }
    return subset(comb);
};

var makeCopy = function (arr) {
    let copy = [];
    for (let i = 0; i < arr.length; i++) {
        copy.push(Array.from(arr[i]));
    }
    return copy;
}