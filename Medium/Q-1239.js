/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    let max = 0;
    const getMaxLength = function (s, brr) {
        for (let i = 0; i < brr.length; i++) {
            let str = s + brr[i];
            if (!isDuplicate(str)) {
                max = Math.max(max, str.length);
                getMaxLength(str, brr.slice(i + 1));
            }
        }
    }
    getMaxLength("", arr);
    return max;
};

var isDuplicate = function (str) {
    let arr = new Array(26).fill(0);
    [...str].forEach(ch => arr[ch.charCodeAt() - 97]++);
    let isDup = false;
    arr.forEach(val => {
        if (val > 1) {
            isDup = true;
        }
    });
    return isDup;
}