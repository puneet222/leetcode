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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let ans = [];
    if (!root) return root;
    const inorder = (root) => {
        if (root === null) return;
        inorder(root.left);
        ans.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    let head = new TreeNode(ans[0]);
    let ptr = head;
    for (let i = 1; i < ans.length; i++) {
        ptr.right = new TreeNode(ans[i]);
        ptr = ptr.right;
    }
    return head;
};