/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function (count) {
    let mode = -1, maxFreq = 0, sum = 0, index = 0, median;
    let map = new Map();
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            if (count[i] > maxFreq) {
                maxFreq = count[i];
                mode = i;
            }
            sum += i * count[i];
            let info = [index];
            index += count[i];
            info.push(index);
            map.set(i, info);
        }
    }
    let min = Math.min(...map.keys());
    let max = Math.max(...map.keys());
    let mean = sum / index;
    if (index % 2 === 0) {
        let m1 = getNumber(map, ((index / 2) - 1));
        let m2 = getNumber(map, index / 2);
        median = (m1 + m2) / 2;
    } else {
        median = getNumber(map, Math.floor(index / 2));
    }
    return [
        min.toFixed(6),
        max.toFixed(6),
        mean.toFixed(6),
        median.toFixed(6),
        mode.toFixed(6)
    ]
};

var getNumber = function (map, index) {
    let num;
    [...map.keys()].forEach(key => {
        if (index >= map.get(key)[0] && index < map.get(key)[1]) {
            num = key;
        }
    });
    return num;
}