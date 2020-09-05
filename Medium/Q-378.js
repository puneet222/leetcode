/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let min = Infinity;
    let heap = matrix[0];
    let i = 0;
    for (let i = 1; i < matrix.length; i++) {
        while (heap.length > 0 && matrix[i][0] > heap[0] && k > 0) {
            min = extractMin(heap);
            k--;
        }
        if (k === 0) {
            break;
        }
        for (let j = 0; j < matrix[i].length; j++) {
            heap.push(matrix[i][j]);
            min_heapify_up(heap, heap.length - 1);
        }
    }
    while (k > 0) {
        min = extractMin(heap);
        k--;
    }
    return min;
};

var min_heapify_down = function (heap, i) {
    let c1 = 2 * i + 1;
    let c2 = 2 * i + 2;
    let smallest = i;
    if (c1 < heap.length && heap[c1] < heap[smallest]) {
        smallest = c1;
    }
    if (c2 < heap.length && heap[c2] < heap[smallest]) {
        smallest = c2;
    }
    if (smallest !== i) {
        let temp = heap[smallest];
        heap[smallest] = heap[i];
        heap[i] = temp;
        min_heapify_down(heap, smallest);
    }
}

var min_heapify_up = function (heap, i) {
    let parent = Math.floor((i - 1) / 2);
    if (parent >= 0 && heap[parent] > heap[i]) {
        let temp = heap[parent];
        heap[parent] = heap[i];
        heap[i] = temp;
        min_heapify_up(heap, parent);
    }
}

var extractMin = function (heap) {
    let min = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    min_heapify_down(heap, 0);
    return min;
}