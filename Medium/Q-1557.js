/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
    let reachableVertices = new Array(n).fill(false);
    edges.forEach(([src, dst]) => {
        reachableVertices[dst] = true;
    });
    let sol = [];
    reachableVertices.forEach((val, index) => {
        if (val === false) sol.push(index);
    });
    return sol;
};