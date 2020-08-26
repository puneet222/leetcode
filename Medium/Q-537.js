/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
    let num1 = a.split("+");
    let num2 = b.split("+");
    let r1 = Number(num1[0]);
    let r2 = Number(num2[0]);
    num1[1] = num1[1].replace('i', '');
    num2[1] = num2[1].replace('i', '');
    let i1 = Number(num1[1]);
    let i2 = Number(num2[1]);
    let r = (r1 * r2) + (i1 * i2 * (-1));
    let i = (r1 * i2) + (r2 * i1);
    return `${r}+${i}i`;
};