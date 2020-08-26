/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let ptr1 = 0, ptr2 = 0, found = true;
    if (needle.length === 0) return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let index2 = i + needle.length;
            if (index2 > haystack.length) {
                return -1;
            }
            let subString = haystack.substring(i, index2);
            if (subString === needle) {
                return i;
            }
        }
    }
    return -1;
};