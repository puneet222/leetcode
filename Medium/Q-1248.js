/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let oddIndex = [];
    nums.forEach((num, i) => {
        if (num % 2 !== 0) {
            oddIndex.push(i);
        }
    });
    let i = 0;
    let j = i + k - 1;
    let count = 0;
    while (j < oddIndex.length) {
        let left = i > 0 ? oddIndex[i] - oddIndex[i - 1] : oddIndex[i] + 1;
        let right = (j === (oddIndex.length - 1)) ? nums.length - oddIndex[j] : oddIndex[j + 1] - oddIndex[j];
        count += (left * right);
        i++;
        j++;
    }
    return count;
};