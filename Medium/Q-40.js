/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    let sol = [];
    const combination = function (set, t, result) {
        if (t === 0) {
            sol.push([...result]);
        }
        for (let i = 0; i < set.length; i++) {
            if (set[i] <= t) {
                if (i > 0 && set[i] === set[i - 1]) {
                    continue;
                }
                result.push(set[i]);
                combination(set.slice(i + 1), t - set[i], result);
                result.pop();
            } else {
                break;
            }
        }
    }
    combination(candidates, target, []);
    return sol;
};