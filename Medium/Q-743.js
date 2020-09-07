/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function (times, N, K) {
    let sol = new Array(N + 1).fill(Infinity);
    sol[K] = 0;
    let map = new Map();
    times.forEach(edge => {
        let obj = {
            source: edge[0],
            target: edge[1],
            time: edge[2]
        };
        let arr = map.has(obj.source) ? map.get(obj.source) : [];
        arr.push(obj);
        map.set(obj.source, arr);
    });
    let queue = [];
    for (let i = 1; i <= N; i++) {
        queue.push(i);
    }
    queue.sort((a, b) => sol[b] - sol[a]);
    while (queue.length > 0) {
        let node = queue.pop();
        if (map.has(node)) {
            map.get(node).forEach(neighbour => {
                let alt = sol[node] + neighbour.time;
                if (alt < sol[neighbour.target]) {
                    sol[neighbour.target] = alt;
                }
            });
            queue.sort((a, b) => sol[b] - sol[a]);
        }
    }
    let allRecieved = true;
    sol.shift();
    sol.forEach(time => {
        if (time === Infinity) allRecieved = false;
    });

    return allRecieved ? Math.max(...sol) : -1;
};