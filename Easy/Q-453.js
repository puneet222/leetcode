/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    nums = nums.sort((a, b) => b - a)
    let moves = 0;
    if (nums.length == 1) {
        return 0;
    }
    let prev = nums[0];
    let mf = 1;
    for (let i = 1; i < nums.length; i++) {
        let diff = Math.abs(prev - nums[i]);
        moves = moves + (diff * mf);
        mf++;
        prev = nums[i];
    }
    return moves;
};