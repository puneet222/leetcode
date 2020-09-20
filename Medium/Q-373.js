/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    let pairs = [];
    if (nums1.length === 0 || nums2.length === 0) return pairs;
    for (let j = 0; j < nums2.length; j++) {
        let p = [nums1[0], nums2[j]];
        pairs.push(p);
    }
    // buildHeap(pairs);
    let sol = [];
    for (let i = 1; i < nums1.length; i++) {
        let p = [nums1[i], nums2[0]];
        while (k > 0 && pairs.length > 0 && getSum(pairs[0]) <= getSum(p)) {
            sol.push(pairs[0]);
            pairs[0] = pairs[pairs.length - 1];
            pairs.pop();
            minHeapify(pairs, 0);
            k--;
        }
        if (k === 0) break;
        for (let j = 0; j < nums2.length; j++) {
            p = [nums1[i], nums2[j]];
            pairs.push(p);
            heapifyUp(pairs, pairs.length - 1);
        }
    }
    while (k > 0 && pairs.length > 0) {
        sol.push(pairs[0]);
        pairs[0] = pairs[pairs.length - 1];
        pairs.pop();
        minHeapify(pairs, 0);
        k--;
    }
    return sol;
};

var getSum = function (pair) {
    return pair[0] + pair[1];
}

var minHeapify = function (heap, i) {
    let c1 = 2 * i + 1;
    let c2 = 2 * i + 2;
    let smallest = i;
    if (c1 < heap.length && getSum(heap[c1]) < getSum(heap[smallest])) {
        smallest = c1;
    }
    if (c2 < heap.length && getSum(heap[c2]) < getSum(heap[smallest])) {
        smallest = c2;
    }
    if (smallest !== i) {
        let temp = heap[smallest];
        heap[smallest] = heap[i];
        heap[i] = temp;
        minHeapify(heap, smallest);
    }
}

var heapifyUp = function (heap, i) {
    let parent = Math.floor((i - 1) / 2);
    if (parent >= 0 && getSum(heap[parent]) > getSum(heap[i])) {
        let temp = heap[parent];
        heap[parent] = heap[i];
        heap[i] = temp;
        heapifyUp(heap, parent);
    }
}

var buildHeap = function (heap) {
    let start = Math.floor(heap.length / 2);
    for (let i = start; i >= 0; i--) {
        minHeapify(heap, i);
    }
}