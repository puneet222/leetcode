/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let obj = {};
    let sol = true;
    [...s].forEach(ch => obj[ch] = obj[ch] ? obj[ch] + 1 : 1);
    [...t].forEach(ch => {
        if (obj[ch]) {
            obj[ch]--;
        } else {
            obj[ch] = 1;
        }
    });
    Object.keys(obj).forEach(key => {
        if (obj[key] !== 0) {
            sol = false;
        }
    });
    return sol;
};