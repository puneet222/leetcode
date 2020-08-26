/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
    let map = new Map();
    [...S].forEach((s, i) => map.set(s, i));
    let arr = [...T];
    arr.sort((a, b) => {
        if (map.has(a) && map.has(b)) {
            return map.get(a) - map.get(b);
        } else if (!map.has(b) && map.has(a)) {
            return 1;
        } else if (map.has(b) && !map.has(a)) {
            return -1;
        } else if ((!map.has(a) && !map.has(b)) || map.get(a) === map.get(b)) {
            return 0;
        }
    });
    return arr.join('');
};