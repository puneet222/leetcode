/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (N) {
    if (N % 2 == 0) return [];
    let memo = new Map();
    const getAllTrees = function (nodes) {
        if (nodes === 1) {
            let node = new TreeNode(0);
            node.left = null;
            node.right = null;
            return [node];
        }
        if (memo.has(nodes)) {
            return memo.get(nodes);
        }
        let left = 1;
        let sol = [];
        while (left < nodes) {
            let leftTree = getAllTrees(left);
            let rightTree = getAllTrees(nodes - 1 - left);
            for (let l = 0; l < leftTree.length; l++) {
                for (let r = 0; r < rightTree.length; r++) {
                    let node = new TreeNode(0);
                    node.left = leftTree[l];
                    node.right = rightTree[r];
                    sol.push(node);
                }
            }
            left = left + 2;
        }
        memo.set(nodes, sol);
        return sol;
    }
    return getAllTrees(N);
};