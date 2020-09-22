/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let result = [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            result.push(i);
        }
    }
    return result;
};

var isSelfDividing = function (num) {
    let n = num;
    while (n > 0) {
        let digit = n % 10;
        if (digit === 0 || num % digit !== 0) return false;
        n = Math.floor(n / 10);
    }
    return true;
}