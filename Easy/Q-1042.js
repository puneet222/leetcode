/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (N, paths) {
    let map = new Map();
    paths.forEach(path => {
        let arr0 = map.has(path[0]) ? map.get(path[0]) : [];
        let arr1 = map.has(path[1]) ? map.get(path[1]) : [];
        arr0.push(path[1]);
        arr1.push(path[0]);
        map.set(path[0], arr0);
        map.set(path[1], arr1);
    });

    let gardens = new Array(N + 1).fill(-1);

    const flowering = function (garden) {
        if (garden > N) {
            return true;
        }
        for (let f = 1; f <= 4; f++) {
            if (isPossible(garden, f)) {
                gardens[garden] = f;
                if (flowering(garden + 1)) {
                    return true;
                } else {
                    gardens[garden] = -1
                }
            }
        }
        return false;
    }

    const isPossible = function (garden, flower) {
        let pos = true;
        if (map.has(garden)) {
            map.get(garden).forEach(g => {
                if (gardens[g] === flower) {
                    pos = false;
                }
            });
        }
        return pos;
    }

    flowering(1);
    gardens.shift();
    return gardens;
};