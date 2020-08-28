/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    let res = 0;
    let cnt = 0;
    for (let i = 0; i < 32; i++) {
        for (let j = 0; j < nums.length; j++) {
            let bit = nums[j] & 1;
            nums[j] = nums[j] >> 1;
            if (bit === 1) {
                cnt++;
            }

        }
        res += cnt * (nums.length - cnt);
        cnt = 0;
    }
    return res;
};