/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
    let map = new Map();
    for (let i = 0; i < matrix.length; i++) {
        let data = getData(matrix[i]);
        if (map.has(data.binary)) {
            map.set(data.binary, map.get(data.binary) + 1);
        } else {
            if (map.has(data.complement)) {
                map.set(data.complement, map.get(data.complement) + 1);
            } else {
                map.set(data.binary, 1);
            }
        }
    }
    let values = [...map.values()];
    return Math.max(...values);
}

var getData = function (arr) {
    let data = {};
    let bin = "";
    let comp = "";
    arr.forEach(bit => {
        bin += bit === 1 ? "1" : "0";
        comp += bit === 1 ? "0" : "1";
    });
    return {
        binary: bin,
        complement: comp
    };
}