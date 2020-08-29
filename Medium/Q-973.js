/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    let arr = [];
    points.forEach((point, i) => {
        let distance = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
        let data = {
            index: i,
            distance: Number(distance)
        }
        arr.push(data);
    });
    arr.sort((a, b) => a.distance - b.distance);
    let sol = [];
    for (let i = 0; i < K; i++) {
        sol.push(points[arr[i]["index"]]);
    }
    return sol;
};