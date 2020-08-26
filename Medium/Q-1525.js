/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
    let map = new Map();
    [...s].forEach(c => {
        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
        } else {
            map.set(c, 1);
        }
    });
    let splitMap = new Map();
    let count = 0;
    [...s].forEach(c => {
        map.set(c, map.get(c) - 1);
        if (splitMap.has(c)) {
            splitMap.set(c, splitMap.get(c) + 1);
        } else {
            splitMap.set(c, 1);
        }
        if (map.get(c) === 0) {
            map.delete(c);
        }
        if (map.size === splitMap.size) {
            count++;
        }
    });
    return count;
};