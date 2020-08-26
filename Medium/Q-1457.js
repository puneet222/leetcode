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
var pseudoPalindromicPaths = function (root) {
    if (root) {
        let paths = treePaths(root);
        let ppp = paths.filter(checkPseudoPalindrom);
        return ppp.length;
    }
};

var treePaths = function (root) {
    let paths = [];
    if (root.left) {
        let left = treePaths(root.left);
        paths.push(...left);
    }
    if (root.right) {
        let right = treePaths(root.right);
        paths.push(...right);
    }
    if (paths.length > 0) {
        paths.forEach(path => path.push(root.val));
    } else {
        paths.push([root.val]);
    }
    return paths;
}

var checkPseudoPalindrom = function (arr) {
    let map = new Map();
    let odd = 0;
    arr.forEach(e => {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1);
        } else {
            map.set(e, 1);
        }
    });
    [...map.keys()].forEach(key => {
        if (map.get(key) % 2 !== 0) odd++;
    });
    return odd > 1 ? false : true;
}