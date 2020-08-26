/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function (s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    s1 = [...s1].sort().join('');
    s2 = [...s2].sort().join('');

    if (isBreak(s1, s2) || isBreak(s2, s1)) {
        return true;
    }
    return false;
};

var isBreak = function (s1, s2) {
    let br = true;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] < s2[i]) {
            br = false;
            break;
        }
    }
    return br;
}