/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
    let count = 0;
    for (let col = 0; col < A[0].length; col++) {
        for (let row = 0; row < A.length - 1; row++) {
            if (A[row + 1][col] < A[row][col]) {
                count++;
                break;
            }
        }
    }
    return count;
};