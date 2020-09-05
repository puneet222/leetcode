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
 * @return {number}
 */
var sumEvenGrandparent = function (root) {
    let sum = 0;
    const evenGP = function (node, hierarchy) {
        if (!node) return;
        if (hierarchy.length === 2) {
            let gp = hierarchy.shift();
            if (gp % 2 === 0) sum += node.val;
        }
        hierarchy.push(node.val);
        evenGP(node.left, [...hierarchy]);
        evenGP(node.right, [...hierarchy]);
    }
    evenGP(root, []);
    return sum;
};