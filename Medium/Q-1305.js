/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    const traverse = function (node, list) {
        if (!node) return;
        traverse(node.left, list);
        list.push(node.val);
        traverse(node.right, list);
    }
    let l1 = [];
    let l2 = [];
    traverse(root1, l1);
    traverse(root2, l2);
    return merge(l1, l2);
};

var merge = function (l1, l2) {
    let ans = [];
    let i = 0, j = 0;
    while (i < l1.length && j < l2.length) {
        if (l1[i] < l2[j]) {
            ans.push(l1[i]);
            i++;
        } else {
            ans.push(l2[j]);
            j++;
        }
    }
    while (i < l1.length) {
        ans.push(l1[i]);
        i++;
    }
    while (j < l2.length) {
        ans.push(l2[j]);
        j++;
    }
    return ans;
}