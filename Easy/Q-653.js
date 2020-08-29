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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let map = new Map();
    let found = false;

    const inorder = function (node) {
        if (!node) return;
        inorder(node.left);
        let diff = k - node.val;
        if (map.has(diff)) {
            found = true;
            return;
        }
        map.set(node.val, true);
        inorder(node.right);
    }

    inorder(root);

    return found;
};