'use strict';

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.heap = [];
    for (let i = 0; i < nums.length; i++) {
        this.heap.push(nums[i]);
        heapifyUp(this.heap);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.push(val);
    heapifyUp(this.heap);

    while (this.heap.length > this.k) {
        this.heap[0] = this.heap.pop();
        heapifyDown(this.heap);
    }
    return this.heap[0];
};

var heapifyUp = function (heap) {
    let idx = heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);

    while (parent >= 0) {
        if (heap[idx] < heap[parent]) {
            let temp = heap[parent];
            heap[parent] = heap[idx];
            heap[idx] = temp;
        }
        idx = parent;
        parent = Math.floor((idx - 1) / 2);
    }
}

var heapifyDown = function (heap) {
    let idx = 0;
    let maxL = heap.length;
    while (idx < maxL) {
        let c1 = 2 * idx + 1;
        let c2 = 2 * idx + 2;
        let smallest = idx;
        if (c1 < maxL && heap[c1] < heap[smallest]) {
            smallest = c1;
        }
        if (c2 < maxL && heap[c2] < heap[smallest]) {
            smallest = c2;
        }
        if (idx !== smallest) {
            let temp = heap[smallest];
            heap[smallest] = heap[idx];
            heap[idx] = temp;
            idx = smallest;
        } else {
            break;
        }
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */