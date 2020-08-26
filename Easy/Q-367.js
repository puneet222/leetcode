/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let i = 0, j = num / 2;
    if (num === 1) return true;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        let sq = mid * mid;
        if (sq === num) {
            return true;
        } else if (sq < num) {
            if (Math.pow(mid + 1, 2) > num) {
                return false;
            } else {
                i = mid + 1;
            }
        } else {
            if (Math.pow(mid - 1, 2) < num) {
                return false;
            } else {
                j = mid - 1;
            }
        }
    }
};