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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let queue = [], level = [];
    let px = -1, py = -1;
    queue.push(root);
    while (queue.length > 0) {
        let node = queue.pop();
        if (node.left) {
            if (node.left.val === x) {
                px = node.val;
            }
            if (node.left.val === y) {
                py = node.val;
            }
            level.push(node.left);
        }
        if (node.right) {
            if (node.right.val === x) {
                px = node.val;
            }
            if (node.right.val === y) {
                py = node.val;
            }
            level.push(node.right);
        }
        if (queue.length === 0) {
            queue = level;
            level = [];
            if (px !== -1 && py !== -1 && px !== py) {
                return true;
            }
            px = -1;
            py = -1;
        }
    }
    return false;
};