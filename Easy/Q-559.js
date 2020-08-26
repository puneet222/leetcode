/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    let queue = [];
    let level = 0;
    if (!root) return level;
    queue.push(root, null);
    while (queue.length > 0) {
        let top = queue.shift();
        if (top === null) {
            level++;
            if (queue.length > 0) {
                queue.push(null);
            }
        } else {
            queue.push(...top.children);
        }
    }
    return level;
};