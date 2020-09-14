/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let sol = [];
    for (let i = 0; i < Math.pow(2, n); i++) {
        let xor = 0;
        let num = i;
        let bits = [];
        while (num !== 0) {
            let bit = num & 1;
            bits.push(bit);
            num = num >> 1;
        }
        for (let b = 0; b < bits.length - 1; b++) {
            bits[b] = bits[b] ^ bits[b + 1];
        }
        if (bits.length === 0) {
            bits.push("0");
        }
        let binary = bits.reverse().join("");
        sol.push(parseInt(binary, 2));
    }
    return sol;
};