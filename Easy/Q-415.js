/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let sum = "";
    num1 = [...num1].reverse().join('');
    num2 = [...num2].reverse().join('');
    let carry = 0;
    let i = 0, j = 0;
    while (i < num1.length || j < num2.length || carry > 0) {
        let add = (i < num1.length ? Number(num1[i]) : 0) + (j < num2.length ? parseInt(num2[j]) : 0) + carry;
        sum += add % 10;
        carry = Math.floor(add / 10);
        i++;
        j++;
    }
    return [...sum].reverse().join('');
};