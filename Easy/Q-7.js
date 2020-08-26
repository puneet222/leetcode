/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let sign = x < 0 ? true : false;
    x = Math.abs(x);
    let r = Number(Array.from(String(x), Number).reverse().join(''));
    if (sign) {
        return r > Math.pow(2, 31) ? 0 : -r;
    } else {
        return r > Math.pow(2, 31) - 1 ? 0 : r;
    }
};