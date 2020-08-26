/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    let sol = words.filter(word => matchPattern(word, pattern));
    return sol;
};

var matchPattern = function (str, ptr) {
    if (str.length !== ptr.length) return false;
    let map = new Map();
    let strMap = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(ptr[i])) {
            if (map.get(ptr[i]) !== str[i]) return false;
        } else {
            if (strMap.has(str[i])) {
                return false;
            } else {
                map.set(ptr[i], str[i]);
                strMap.set(str[i], ptr[i]);
            }
        }
    }
    return true;
}