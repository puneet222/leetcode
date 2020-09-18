/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, K) {
    let sumMat = new Array(mat.length + 1);
    sumMat[0] = new Array(mat[0].length + 1).fill(0);
    for (let r = 1; r < sumMat.length; r++) {
        sumMat[r] = new Array(mat[0].length + 1).fill(0);
        for (let c = 1; c < sumMat[r].length; c++) {
            sumMat[r][c] = mat[r - 1][c - 1] + sumMat[r - 1][c] + sumMat[r][c - 1] - sumMat[r - 1][c - 1];
        }
    }
    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[r].length; c++) {
            let hc = Math.min((c + K), mat[r].length - 1);
            let hr = Math.min(r + K, mat.length - 1);
            let lc = Math.max(0, c - K);
            let lr = Math.max(0, r - K);
            mat[r][c] = sumMat[hr + 1][hc + 1] - sumMat[lr][hc + 1] - sumMat[hr + 1][lc] + sumMat[lr][lc];
        }
    }
    return mat;
};