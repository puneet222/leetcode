/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    let stack = [];
    let ans = [];
    if (!root) {
        return ans;
    }
    stack.push(root);
    while (stack.length > 0) {
        let top = stack.pop();
        let ch = top.children;
        if (ch.length > 0) {
            top.children = [];
            stack.push(top);
            for (let i = ch.length - 1; i >= 0; i--) {
                stack.push(ch[i]);
            }
        } else {
            ans.push(top.val);

        }
    }
    return ans;
};