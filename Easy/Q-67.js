/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let num1 = [...a].reverse();
    let num2 = [...b].reverse();
    let sol = [];
    let i = 0, j = 0, carry = 0;
    while (i < num1.length || j < num2.length || carry > 0) {
        let sum = (i < num1.length ? Number(num1[i]) : 0) + (j < num2.length ? Number(num2[j]) : 0) + carry;
        sol.push(sum % 2);
        carry = Math.floor(sum / 2);
        i++;
        j++;
    }
    return sol.reverse().join('');
};