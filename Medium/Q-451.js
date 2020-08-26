/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = new Map();
    [...s].forEach(c => {
        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
        } else {
            map.set(c, 1);
        }
    });
    let keys = [...map.keys()];
    keys.sort((a, b) => map.get(b) - map.get(a));
    let str = "";
    keys.forEach(k => str += k.repeat(map.get(k)));
    return str;
};