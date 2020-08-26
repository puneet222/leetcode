/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let obj = {};
    let sol = -1;
    [...s].forEach(ch => obj[ch] = obj[ch] ? obj[ch] + 1 : 1);
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === 1) {
            sol = i;
            break;
        }
    }
    return sol;
};