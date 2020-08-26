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
var sumOfLeftLeaves = function (root) {
    if (!root) {
        return 0;
    }
    let sum = 0;
    if (root.left) {
        if (isLeaf(root.left)) {
            sum += root.left.val;
        } else {
            sum += sumOfLeftLeaves(root.left);
        }
    }
    if (root.right) {
        sum += sumOfLeftLeaves(root.right);
    }
    return sum;
};

var isLeaf = function (root) {
    if (root.left === null && root.right === null) {
        return true;
    }
    return false;
}