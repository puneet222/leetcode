/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    let map = new Map();
    [...t].forEach(c => {
        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
        } else {
            map.set(c, 1);
        }
    });
    let count = 0;
    [...s].forEach(c => {
        if (map.has(c) && map.get(c) > 0) {
            map.set(c, map.get(c) - 1);
        } else {
            count++;
        }
    });
    return count;
};