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
 */
var FindElements = function (root) {
    let stack = [];
    this.map = new Map();
    root.val = 0;
    stack.push(root);
    this.map.set(0, true);
    while (stack.length > 0) {
        let node = stack.pop();
        let val = node.val;
        this.map.set(val, true);
        if (node.left !== null) {
            node.left.val = val * 2 + 1;
            stack.push(node.left);
        }
        if (node.right !== null) {
            node.right.val = val * 2 + 2;
            stack.push(node.right);
        }
    }
    console.log(root);
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    if (this.map.get(target)) {
        return true;
    }
    return false;
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */