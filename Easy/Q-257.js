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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const paths = function (node) {
        let sol = [];
        if (!node) return sol;
        if (!node.left && !node.right) {
            return [[node.val]];
        }
        let left = paths(node.left);
        let right = paths(node.right);
        left.forEach(path => {
            path.push(node.val);
        });
        right.forEach(path => {
            path.push(node.val);
        });

        return [...left, ...right];
    }
    let p = paths(root);
    for (let i = 0; i < p.length; i++) {
        p[i] = p[i].reverse().join("->");
    }
    return p;
};