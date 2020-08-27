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
var averageOfLevels = function (root) {
    let stack = [root, null];
    let sum = 0, count = 0;
    let ans = [];
    while (stack.length > 0) {
        let top = stack.shift();
        if (top === null) {
            if (stack.length > 0) {
                stack.push(null);
            }
            ans.push(sum / count);
            sum = 0;
            count = 0;
        } else {
            sum += top.val;
            count++;
            if (top.left) {
                stack.push(top.left);
            }
            if (top.right) {
                stack.push(top.right);
            }
        }
    }
    return ans;
};