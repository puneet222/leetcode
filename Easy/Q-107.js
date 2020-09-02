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
var levelOrderBottom = function (root) {
    let levelTraversal = [];
    let queue = [];
    if (!root) return levelTraversal;
    queue.push(root, null);
    let level = [];
    while (queue.length > 0) {
        let node = queue.shift();
        if (node === null) {
            levelTraversal.push(level);
            level = [];
            if (queue.length > 0) {
                queue.push(null);
            }
        } else {
            level.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    levelTraversal.reverse();
    return levelTraversal;
};