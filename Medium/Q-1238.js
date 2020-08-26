/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {
    let gray = [];
    for (let i = 0; i < Math.pow(2, n); i++) {
        gray.push(i ^ (i >> 1));
    }
    let index = gray.indexOf(start);
    return gray.slice(index).concat(gray.slice(0, index));
};