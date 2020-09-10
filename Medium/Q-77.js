/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let set = [];
    for (let i = 1; i <= n; i++) {
        set.push(i);
    }
    let sol = [];
    const combination = function (arr, num, temp) {
        if (arr.length < num) {
            return;
        }
        if (num === 0) {
            sol.push([...temp]);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            temp.push(arr[i]);
            let narr = arr.slice(i + 1);
            combination(narr, num - 1, temp);
            temp.pop();
        }
    }
    combination(set, k, []);
    return sol;
};