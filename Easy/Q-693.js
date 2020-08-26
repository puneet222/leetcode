/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    let currentBit = n % 2;
    n = Math.floor(n / 2);
    let sol = true;
    while (n) {
        let bit = n % 2;
        if (bit === currentBit) {
            sol = false;
            break;
        }
        currentBit = bit;
        n = Math.floor(n / 2);
    }
    return sol;
};