/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let first = [];
    let second = [];
    let obj = {};
    let sol = [];
    if (nums1.length < nums2.length) {
        first = nums1;
        second = nums2;
    } else {
        first = nums2;
        second = nums1;
    }
    first.forEach(num => obj[num] = obj[num] ? obj[num] + 1 : 1);
    second.forEach(num => {
        if (obj[num] && obj[num] > 0) {
            obj[num] = obj[num] - 1;
            sol.push(num);
        }
    });
    return sol;
};