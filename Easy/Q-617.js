'use strict'

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    if (t1 === null && t2 === null) {
        return null;
    }
    let data = (t1 ? t1.val : 0) + (t2 ? t2.val : 0);
    let node = new TreeNode(data);
    node.left = mergeTrees(t1 ? t1.left : null, t2 ? t2.left : null);
    node.right = mergeTrees(t1 ? t1.right : null, t2 ? t2.right : null);
    return node;
};