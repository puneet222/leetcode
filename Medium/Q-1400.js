/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
    let map = new Map();
    [...s].forEach(ch => {
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1);
        } else {
            map.set(ch, 1);
        }
    });
    let odd = 0;
    [...map.values()].forEach(val => {
        if (val % 2 !== 0) {
            odd++;
        }
    });
    if (odd > k || k > s.length) return false;
    return true;
};