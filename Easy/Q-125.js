/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let isP = true;
    s = s.toLocaleLowerCase();
    s = s.replace(/[^0-9a-z]/gi, '');
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            isP = false;
            break;
        }
        i++;
        j--;
    }
    return isP;
};