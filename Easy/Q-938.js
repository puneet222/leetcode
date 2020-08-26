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
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var rangeSumBST = function (root, L, R) {
    return treeSum(root, L, R, 0);
};

var treeSum = function (root, L, R, sum) {
    if (root === null) {
        return sum;
    }
    let lsum = treeSum(root.left, L, R, sum);
    let nsum = 0;
    if (root.val >= L && root.val <= R) {
        nsum = root.val;
    }
    let rsum = treeSum(root.right, L, R, sum);
    return lsum + rsum + nsum;
} 