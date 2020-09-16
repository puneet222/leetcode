/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let arr = new Array(101).fill(0);
    nums.forEach(num => {
        arr[num]++;
    });
    let pairs = 0;
    arr.forEach(val => {
        if (val > 1) {
            pairs += Math.floor((val * (val - 1)) / 2);
        }
    });
    return pairs;
};