/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    let sorted = nums.sort(function (a, b) { return a - b });
    let i = 0, j = 1;
    let count = 0;
    let map = new Map();
    while (j < sorted.length) {
        let diff = sorted[j] - sorted[i];
        if (diff === k && !map.has(sorted[i])) {
            map.set(sorted[i], true);
            i++;
            j++;
        } else if (diff > k) {
            i++;
            if (i === j) j++;
        } else {
            j++;
        }
    }
    return map.size;
};