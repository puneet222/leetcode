/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let l = 0, r = x;
    if (x === 1) {
        return x;
    }
    while (1) {
        let num = Math.floor((r + l) / 2);
        let sq = Math.pow(num, 2);
        if (sq === x) {
            return num;
        }
        if (sq > x) {
            r = num;
        }
        if (sq < x) {
            l = num;
            if (Math.pow(num + 1, 2) > x) {
                return num;
            }
        }
    }
};

