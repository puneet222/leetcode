/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
    let count = 0;
    while (a || b || c) {
        let bit1 = a & 1;
        let bit2 = b & 1;
        let bit3 = c & 1;
        a = a >> 1;
        b = b >> 1;
        c = c >> 1;
        let OR = bit1 | bit2;
        if (OR !== bit3) {
            if (bit3 !== 1 && bit1 === 1 && bit2 === 1) {
                count = count + 2;
            } else {
                count++;
            }
        }
    }
    return count;
};