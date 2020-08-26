/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let small = nums1.length > nums2.length ? nums2 : nums1;
    let big = small === nums1 ? nums2 : nums1;
    let a = new Set(big);
    let b = new Set(small);
    return [...a].filter(e => b.has(e));
};