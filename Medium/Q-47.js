/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums.length === 0) return [[]];
    if(nums.length === 1) return [[nums[0]]];
    let map = new Map();
    let sol = [];
    for(let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], true);
            let n = nums.splice(i, 1)[0];
            let permutations = permuteUnique(nums);
            for(let j = 0; j < permutations.length; j++) {
                permutations[j].unshift(n);
            }
            sol = [...sol, ...permutations];
            nums.splice(i, 0, n);
        }
    }
    return sol;
};