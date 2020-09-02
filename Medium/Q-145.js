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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let stack = [], traversal = [];
    if (!root) {
        return traversal;
    }
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        traversal.push(node.val);
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }
    traversal.reverse();
    return traversal;
};