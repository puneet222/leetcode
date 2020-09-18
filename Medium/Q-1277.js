/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    let sum = 0;
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === 1 && r > 0 && c > 0) {
                matrix[r][c] = Math.min(matrix[r - 1][c], matrix[r][c - 1], matrix[r - 1][c - 1]) + 1;
            }
            sum += matrix[r][c];
        }
    }
    return sum;
};