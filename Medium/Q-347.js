/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let obj = {};
    nums.forEach(num => obj[num] = obj[num] ? obj[num] + 1 : 1);
    let sortedNums = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    return sortedNums.splice(0, k);
};