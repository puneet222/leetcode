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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {
    if (!root) return root;
    if (root.val >= L && root.val <= R) {
        let node = new TreeNode(root.val);
        node.left = trimBST(root.left, L, R);
        node.right = trimBST(root.right, L, R);
        return node;
    } else {
        if (root.val < L) {
            return trimBST(root.right, L, R);
        } else {
            return trimBST(root.left, L, R);
        }
    }
};