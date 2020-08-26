/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let count = 1;
    let sol = [];
    for (let i = 0; i < target.length; i++) {
        while (count !== target[i]) {
            sol.push("Push");
            sol.push("Pop");
            count++;
        }
        sol.push("Push");
        count++;
    }
    return sol;
};