/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    if (preorder.length === 0) {
        return null;
    }
    let inorder = [...preorder].sort((a, b) => a - b);
    let rootVal = preorder.shift();
    let idx = inorder.findIndex(val => val === rootVal);
    let linorder = inorder.slice(0, idx);

    let lpreorder = preorder.splice(0, linorder.length);

    let root = new TreeNode(rootVal);
    root.left = bstFromPreorder(lpreorder);
    root.right = bstFromPreorder(preorder);

    return root;
};