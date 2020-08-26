'use strict'

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let heap = [];
    heap.push(stones[0]);
    for (let i = 1; i < stones.length; i++) {
        heap.push(stones[i]);
        heapifyUp(heap);
    }
    while (heap.length > 1) {
        let s1 = getTop(heap);
        let s2 = getTop(heap);
        let res = 0;
        if (s1 < s2) {
            res = s2 - s1;
        } else {
            res = s1 - s2;
        }

        if (res > 0 || heap.length === 0) {
            heap.push(res);
            heapifyUp(heap);
        }
    }
    return heap[0];
};

var getTop = function (heap) {
    let element = heap[0];
    if (heap.length > 1) {
        heap[0] = heap.pop();
        heapifyDown(heap);
    } else {
        heap.pop();
    }
    return element;
}

var heapifyUp = function (heap) {
    if (heap.length <= 1) {
        return;
    }
    let idx = heap.length - 1;
    while (idx >= 0) {
        let parent = Math.floor((idx - 1) / 2);
        if (heap[parent] < heap[idx]) {
            let temp = heap[parent];
            heap[parent] = heap[idx];
            heap[idx] = temp;
        }
        idx = parent;
    }
}

var heapifyDown = function (heap) {
    let idx = 0;
    let maxL = heap.length;
    while (idx < maxL) {
        let largest = idx;
        let c1 = 2 * idx + 1;
        let c2 = 2 * idx + 2;
        if (c1 < maxL && heap[c1] > heap[largest]) {
            largest = c1;
        }
        if (c2 < maxL && heap[c2] > heap[largest]) {
            largest = c2;
        }
        if (largest !== idx) {
            let temp = heap[largest];
            heap[largest] = heap[idx];
            heap[idx] = temp;
            idx = largest;
        } else {
            break;
        }
    }
}
