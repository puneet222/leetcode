/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let count = 0;
    if (n <= 0) return false;
    while (n) {
        let bit = n % 2;
        if (bit === 1) count++;
        n = Math.floor(n / 2);
    }
    return count === 1 ? true : false;
};