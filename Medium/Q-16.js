/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let diff = Infinity;
    let ans = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let p1 = i + 1;
        let p2 = nums.length - 1;
        while (p1 < p2) {
            let sum = nums[i] + nums[p1] + nums[p2];
            let d = Math.abs(sum - target);
            if (d < diff) {
                diff = d;
                ans = sum;
            }
            if (sum === target) break;
            if (sum < target) {
                p1++;
            } else {
                p2--;
            }
        }
    }
    return ans;
};