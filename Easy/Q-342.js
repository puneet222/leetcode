/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    return num > 0 && (Math.log2(num)) % 2 === 0;
};