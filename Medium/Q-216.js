/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    return combinations(new Set(), n, k);
};

var combinations = function (set, n, k) {
    if (n <= 0) {
        return [];
    }
    if (k === 1) {
        return (!set.has(n) && n < 10) ? [[n]] : [];
    }
    let sol = [];
    let nSet = new Set(set);
    for (let i = 1; i < 10; i++) {
        if (!set.has(i) && i < n) {
            nSet.add(i);
            let rest = combinations(nSet, n - i, k - 1);
            rest.forEach(arr => arr.push(i));
            sol = [...sol, ...rest]
        }
    }
    for (let i = 0; i < sol.length; i++) {
        sol[i].sort((a, b) => a - b);
    }
    return sol;
}