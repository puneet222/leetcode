/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    let stack = [];
    let ans = [];
    if (root === null) return ans;
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        ans.push(node.val);
        let child = node.children;
        if (child.length > 0) {
            for (let i = child.length - 1; i >= 0; i--) {
                stack.push(child[i]);
            }
        }
    }
    return ans;
};