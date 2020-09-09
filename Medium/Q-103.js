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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let sol = [];
    if (!root) return sol;
    let queue = [root];
    let rev = false;
    while (queue.length > 0) {
        let level = [];
        let levelqueue = [];
        while (queue.length > 0) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) {
                levelqueue.push(node.left);
            }
            if (node.right) {
                levelqueue.push(node.right);
            }
        }
        queue = levelqueue;
        if (rev) {
            level.reverse();
        }
        rev = !rev;
        sol.push(level);
    }
    return sol;
};