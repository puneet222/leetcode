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
var deepestLeavesSum = function (root) {
    let queue = [], level = [], lastLevel = [];
    queue.push(root);
    lastLevel = [...queue];
    while (queue.length > 0) {
        let node = queue.pop();
        if (node.left) {
            level.push(node.left);
        }
        if (node.right) {
            level.push(node.right);
        }
        if (queue.length === 0) {
            if (level.length > 0) {
                lastLevel = [...level];
            }
            queue = level;
            level = [];
        }
    }
    return lastLevel.reduce((acc, node) => acc + node.val, 0);
};