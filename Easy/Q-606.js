/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
    if (t === null) {
        return "";
    }
    let str = "" + t.val;
    let strLeft = `(${tree2str(t.left)})`;
    let strRight = `(${tree2str(t.right)})`;
    if (strLeft === '()' && strRight === '()') {
        strLeft = "";
        strRight = "";
    } else if (strRight === '()') {
        strRight = "";
    }
    str += strLeft + strRight;
    return str;
};