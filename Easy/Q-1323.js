/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let digits = [], swap = true;
    while (num != 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    digits.reverse();
    let i = 0, n = 0;
    while (i < digits.length) {
        if (digits[i] === 6 && swap) {
            digits[i] = 9;
            swap = false;
        }
        n = n * 10 + digits[i];
        i++;
    }
    return n;
};