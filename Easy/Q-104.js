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
var sumRootToLeaf = function (root) {
    let paths = rootToLeafPaths(root);
    let sum = 0;
    paths.forEach(path => {
        sum += parseInt(path, 2);
    });
    return sum;
};

const rootToLeafPaths = function (node) {
    if (!node) return [];
    if (!node.left && !node.right) {
        return [node.val + ""];
    }
    let left = rootToLeafPaths(node.left);
    let right = rootToLeafPaths(node.right);

    let paths = [...left, ...right];
    left = null;
    right = null;
    for (let i = 0; i < paths.length; i++) {
        paths[i] = node.val + paths[i];
    }
    return paths;
}

