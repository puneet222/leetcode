/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    let f = 1;
    let i = 2;
    let count = 1;
    while (count !== k && i <= n) {
        if (n % i === 0) {
            count++;
            f = i;
        }
        i++;
    }
    return count === k ? f : -1;
};