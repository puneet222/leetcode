/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = new Map();
    let stack = [];
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
            map.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i]);
    }
    let sol = [];
    nums1.forEach(num => {
        if (map.has(num)) {
            sol.push(map.get(num));
        } else {
            sol.push(-1);
        }
    });
    return sol;
};