/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let map = new Map();
    tasks.forEach(task => {
        if (map.has(task)) {
            map.set(task, map.get(task) + 1);
        } else {
            map.set(task, 1);
        }
    });
    let max = 0, count = 1;
    [...map.keys()].forEach(key => {
        if (map.get(key) >= max) {
            if (map.get(key) === max) {
                count++;
            } else {
                max = map.get(key);
                count = 1;
            }
        }
    });

    let ins = (max - 1) * n + max + count - 1;

    return Math.max(ins, tasks.length);
};