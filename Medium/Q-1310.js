/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    let xors = new Array(arr.length);
    xors[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        xors[i] = xors[i - 1] ^ arr[i];
    }
    let sol = [];
    queries.forEach(query => {
        if (query[0] === 0) {
            sol.push(xors[query[1]]);
        } else {
            let x = xors[query[0] - 1] ^ xors[query[1]];
            sol.push(x);
        }
    });
    return sol;
};