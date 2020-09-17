/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
    let half = Math.floor(arr.length / 2);
    let map = new Map();
    arr.forEach(val => {
        if (map.has(val)) {
            map.set(val, map.get(val) + 1);
        } else {
            map.set(val, 1);
        }
    });
    let values = [...map.values()].sort((a, b) => b - a);
    let count = 0, len = arr.length;
    for (let i = 0; i < values.length; i++) {
        len = len - values[i];
        count++;
        if (len <= half) {
            break;
        }
    }
    return count;
};