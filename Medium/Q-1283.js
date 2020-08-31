/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    let i = 1, j = Math.max(...nums);
    nums.sort((a, b) => a - b);
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        let sum = 0;
        nums.forEach(num => {
            sum += Math.ceil(num / mid);
        });
        if (sum > threshold) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return j + 1;
};

