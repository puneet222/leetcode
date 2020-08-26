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
 * @return {boolean}
 */
// var isUnivalTree = function(root) {
//     let val = root.val;
//     let isUniVal = true;
//     let ptr = root;
//     const inorder = root => {
//         if(!root) return;
//         inorder(root.left);
//         if(root.val !== val) {
//             isUniVal = false;
//             return;
//         }
//         inorder(root.right);
//     }
//     inorder(ptr);
//     return isUniVal;
// };

// Recursive

var isUnivalTree = function (root) {
    return checkUniVal(root, root.val);
};

var checkUniVal = function (node, val) {
    if (!node) return true;
    return node.val === val && checkUniVal(node.left, val) && checkUniVal(node.right, val);
}