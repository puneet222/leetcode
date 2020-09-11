/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
    let distance = new Array(n).fill(Infinity);
    distance[src] = 0;
    let map = new Map();
    let via = new Map();
    flights.forEach(flight => {
        let u = flight[0], v = flight[1], w = flight[2];
        let obj = { u, v, w };
        let arr = map.has(u) ? map.get(u) : [];
        arr.push(obj);
        map.set(u, arr);
    });
    let vobj = { stops: -1, price: 0 };
    via.set(src, [vobj]);
    let nodes = [...map.keys()];
    let set = new Set();
    while (nodes.length > 0) {
        nodes.sort((a, b) => distance[b] - distance[a]); // decrease distance sort
        let source = nodes.pop();
        if (map.has(source)) {
            map.get(source).forEach(path => {
                if (!set.has(path.v)) {
                    let alt = distance[path.u] + path.w;
                    if (alt < distance[path.v]) {
                        distance[path.v] = alt;
                    }
                    updateViaMap(via, path.u, path.v, path.w);
                }
            });
        };
        set.add(source);
    }

    console.log(via);
};

var updateViaMap = function (via, u, v, w) {
    if (via.has(u)) {
        let paths = via.get(u);
        let vpaths = [...paths];
        vpaths.forEach(path => {
            path.stops += 1;
            path.price += w;
        });
        let pathArr = via.has(v) ? via.get(v) : [];
        pathArr.push(...vpaths);
        via.set(v, pathArr);
    }
}