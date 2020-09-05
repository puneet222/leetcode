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
var constructMaximumBinaryTree = function (nums) {
    if (nums.length === 0) return null;
    let maxIdx = getMaxIndex(nums);

    let node = new TreeNode(nums[maxIdx]);

    node.left = constructMaximumBinaryTree(nums.splice(0, maxIdx));
    nums.shift() // removing the max index value
    node.right = constructMaximumBinaryTree(nums);

    return node;
};

var getMaxIndex = function (arr) {
    let max = -Infinity;
    let idx = 0;
    arr.forEach((val, i) => {
        if (val > max) {
            max = val;
            idx = i;
        }
    });
    return idx;
}