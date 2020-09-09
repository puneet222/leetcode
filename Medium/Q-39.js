/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let sol = [];
    candidates.sort((a, b) => a - b);
    const getCombinations = (cads, key, select) => {
        if (key === 0) {
            sol.push([...select]);
        }
        if (cads[0] > key) return;
        for (let i = 0; i < cads.length; i++) {
            if ((key - cads[i]) >= 0) {
                let nCads = cads.slice(i);
                select.push(cads[i]);
                getCombinations(nCads, key - cads[i], select);
                select.pop();
            } else {
                break;
            }
        }
    }
    getCombinations(candidates, target, []);
    return sol;
};