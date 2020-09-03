/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let sum = A[i] + B[j];
            if (map1.has(sum)) {
                map1.set(sum, map1.get(sum) + 1);
            } else {
                map1.set(sum, 1);
            }
        }
    }

    let count = 0;

    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < D.length; j++) {
            let sum = -C[i] - D[j];
            if (map1.has(sum)) {
                count += map1.get(sum);
            }
        }
    }

    return count;
};