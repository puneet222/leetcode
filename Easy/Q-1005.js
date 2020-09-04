/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
    build_min_heap(A);
    for (let i = 0; i < K; i++) {
        A[0] = -A[0];
        min_heapify(A, 0);
    }
    return A.reduce((acc, val) => acc + val, 0);
};

var min_heapify = function (A, i) {
    let c1 = 2 * i + 1;
    let c2 = 2 * i + 2;
    let smallest = i;
    if (c1 < A.length && A[c1] < A[smallest]) {
        smallest = c1;
    }
    if (c2 < A.length && A[c2] < A[smallest]) {
        smallest = c2;
    }
    if (smallest !== i) {
        let temp = A[smallest];
        A[smallest] = A[i];
        A[i] = temp;
        min_heapify(A, smallest);
    }
}

var build_min_heap = function (A) {
    let start = Math.floor(A.length / 2);
    for (let i = start; i >= 0; i--) {
        min_heapify(A, i);
    }
}