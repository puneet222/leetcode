/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null;

    let mid = Math.floor((0 + nums.length) / 2);
    let node = new TreeNode(nums[mid]);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid + 1);
    node.left = sortedArrayToBST(left);
    node.right = sortedArrayToBST(right);

    return node;
};