/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let i = 0, j = n;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        let coins = getSum(mid);
        if (coins === n) {
            return mid;
        } else if (coins > n) {
            j = mid - 1;
        } else {
            if (getSum(mid + 1) > n) {
                return mid;
            } else {
                i = mid + 1;
            }
        }
    }
};

var getSum = function (n) {
    let sum = (n * (n + 1)) / 2;
    return sum;
}