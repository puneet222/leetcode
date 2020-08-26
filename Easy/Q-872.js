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
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let seq1 = [], seq2 = [];
    getLeafSequence(root1, seq1);
    getLeafSequence(root2, seq2);
    let sq = true;
    if (seq1.length === seq2.length) {
        for (let i = 0; i < seq1.length; i++) {
            if (seq1[i] !== seq2[i]) {
                sq = false;
                break;
            }
        }
        return sq;
    } else {
        return false;
    }
};

var getLeafSequence = function (root, seq) {
    if (root === null) {
        return;
    }
    if (root.left) {
        getLeafSequence(root.left, seq);
    }
    if (root.right) {
        getLeafSequence(root.right, seq);
    }
    if (root.left === null && root.right === null) {
        seq.push(root.val);
    }
}