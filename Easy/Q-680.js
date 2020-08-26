/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let i = 0, j = s.length - 1;
    while (i <= j) {
        if (s[i] !== s[j]) {
            if (checkPalindrome(i + 1, j, s) || checkPalindrome(i, j - 1, s)) {
                return true;
            } else {
                return false;
            }

        }
        i++;
        j--;
    }
    return true;
};

var checkPalindrome = function (i, j, s) {
    while (i <= j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}