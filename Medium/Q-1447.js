/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
    let fractions = [];
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (gcd(j, i) === 1) {
                fractions.push(`${i}/${j}`);
            }
        }
    }
    return fractions;
};

var gcd = function (a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}