/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
    let min = Math.max(...weights);
    let max = weights.reduce((acc, val) => acc + val, 0);
    let ans = max;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let days = getDays(weights, mid);
        if (days <= D) {
            ans = mid < ans ? mid : ans;
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return ans;
};

var getDays = function (weights, maxWeight) {
    let current = 0;
    let days = 1;
    weights.forEach(weight => {
        current += weight;
        if (current > maxWeight) {
            current = weight;
            days++;
        }
    });
    return days;
}