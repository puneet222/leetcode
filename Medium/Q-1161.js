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
var maxLevelSum = function (root) {
    let max_level = 0, max_sum = -Infinity;
    let queue = [root];
    let level = 0;
    while (queue.length > 0) {
        let sum = 0;
        let levelQueue = queue;
        queue = [];
        level++;
        while (levelQueue.length > 0) {
            let node = levelQueue.pop();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            sum += node.val;
        }
        if (sum > max_sum) {
            max_level = level;
            max_sum = sum;
        }
    }
    return max_level;
};