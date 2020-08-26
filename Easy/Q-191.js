/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        count = count + n % 2;
        n = Math.floor(n / 2);
    }
    return count;
};