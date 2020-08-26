/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let obj = {};
    [...magazine].forEach(ch => {
        obj[ch] = obj[ch] ? obj[ch] = obj[ch] + 1 : 1;
    });
    let ransom = true;
    [...ransomNote].forEach(ch => {
        if (obj[ch]) {
            obj[ch]--;
        } else {
            ransom = false;
        }
    });
    Object.keys(obj).forEach(key => {
        if (obj[key] < 0) {
            ransom = false;
        }
    });
    return ransom;
};