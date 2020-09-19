/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    let map = new Map();
    A.forEach(val => {
        if (map.has(val)) {
            map.set(val, map.get(val) + 1);
        } else {
            map.set(val, 1);
        }
    });
    let n = Math.floor(A.length / 2), sol = 0;
    [...map.keys()].forEach(key => {
        if (map.get(key) === n) {
            sol = key;
        }
    });
    return sol;
};