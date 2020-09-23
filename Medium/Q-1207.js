/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let arrMap = getFrequencyMap(arr);
    let freqMap = getFrequencyMap([...arrMap.values()]);
    let values = [...freqMap.values()];
    for (let i = 0; i < values.length; i++) {
        if (values[i] > 1) {
            return false;
        }
    }
    return true;
};

var getFrequencyMap = function (arr) {
    let map = new Map();
    arr.forEach(val => {
        if (map.has(val)) {
            map.set(val, map.get(val) + 1);
        } else {
            map.set(val, 1);
        }
    });
    return map;
}