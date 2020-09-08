/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let memo = new Map();
    return Math.min(getMinCost(cost, 0, memo), getMinCost(cost, 1, memo));
};

var getMinCost = function (cost, step, memo) {
    let n = cost.length;
    if (step === n - 1 || step === n - 2) {
        memo.set(step, cost[step]);
        return cost[step];
    }
    if (memo.has(step)) {
        return memo.get(step);
    }
    let minCost = Math.min(getMinCost(cost, step + 1, memo), getMinCost(cost, step + 2, memo)) + cost[step];
    memo.set(step, minCost);
    return minCost;
}