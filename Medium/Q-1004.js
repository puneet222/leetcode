/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
    let i = 0, j = 0;
    let count = -Infinity;
    while (j < A.length) {
        if (A[j] === 0) {
            K--;
        }
        if (K < 0) {
            count = (j - i) > count ? (j - i) : count;
            while (K < 0) {
                if (A[i] === 0) {
                    K++;
                    j++;
                }
                i++;
            }
        } else {
            j++;
        }
    }
    count = (j - i) > count ? (j - i) : count;
    return count;
};

