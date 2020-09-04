/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length === 1) {
        return [nums];
    }
    let permutations = [];
    for (let i = 0; i < nums.length; i++) {
        let remaining = [...nums.slice(0, i), ...nums.slice(i + 1)];
        let rpermute = permute(remaining);
        for (let j = 0; j < rpermute.length; j++) {
            rpermute[j] = [nums[i], ...rpermute[j]];
        }
        permutations = [...permutations, ...rpermute];

    }
    return permutations;
};