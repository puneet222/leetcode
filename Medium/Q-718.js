/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
    let maxLength = 0;
    let map = new Map();
    for (let i = 0; i < B.length; i++) {
        if (map.has(B[i])) {
            let arr = map.get(B[i]);
            arr.push(i);
            map.set(B[i], arr);
        } else {
            map.set(B[i], [i]);
        }
    }
    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i])) {
            let arr = map.get(A[i]);
            arr.forEach(idx => {
                let len = maxCommon(A, B, i, idx);
                if (len > maxLength) {
                    maxLength = len;
                }
            });
        }
    }
    return maxLength;
};

var maxCommon = function (A, B, idx1, idx2) {
    let count = 0;
    while (idx1 < A.length && idx2 < B.length) {
        if (A[idx1] === B[idx2]) {
            count++;
        } else {
            break;
        }
    }
    return count;
}