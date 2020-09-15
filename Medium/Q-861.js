/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
    let sum = 0; let power = true;
    // row modification just check most significat bit coulmn
    // i.e. 1st column
    for (let r = 0; r < A.length; r++) {
        if (A[r][0] === 0) {
            for (let c = 0; c < A[0].length; c++) {
                A[r][c] = A[r][c] === 1 ? 0 : 1;
            }
        }
    }

    // column modification
    for (let c = 0; c < A[0].length; c++) {
        let ones = 0, zero = 0;
        for (let r = 0; r < A.length; r++) {
            if (A[r][c] === 0) {
                zero++;
            } else {
                ones++;
            }
        }
        let count = Math.max(zero, ones);
        let pow = A[0].length - 1 - c;
        sum += count * Math.pow(2, pow);
    }
    return sum;
};