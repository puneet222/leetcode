/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    let x0 = coordinates[0][0];
    let y0 = coordinates[0][1];
    let x1 = coordinates[1][0];
    let y1 = coordinates[1][1];
    let straight = true;
    let m = getSlope(x0, y0, x1, y1);
    // console.log(m);
    for (let i = 2; i < coordinates.length; i++) {
        let slope = getSlope(x0, y0, coordinates[i][0], coordinates[i][1]);
        if (slope !== m) {
            let isInfinity = Math.abs(m) === Infinity ? true : false;
            if (isInfinity && Math.abs(slope) === Infinity) {
                continue;
            }
            straight = false;
            break;
        }
    }
    return straight;
};

var getSlope = function (x1, y1, x2, y2) {
    let slope = (y2 - y1) / (x2 - x1);
    return slope;
}