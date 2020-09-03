/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let vals = [];
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        vals.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    let MIN = Infinity;
    for (let i = 0; i < vals.length - 1; i++) {
        let min = Math.abs(vals[i] - vals[i + 1]);
        if (min < MIN) {
            MIN = min;
        }
    }
    return MIN;
};