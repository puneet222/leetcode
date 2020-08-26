/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let reverseBinary = n.toString(2).split('').reverse();
    if (reverseBinary.length < 32) {
        let diff = 32 - reverseBinary.length;
        while (diff > 0) {
            reverseBinary.push("0");
            diff--;
        }
    }
    reverseBinary = reverseBinary.join('');
    return parseInt(reverseBinary, 2);
};