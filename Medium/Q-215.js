/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    build_max_heap(nums);
    for (let i = 1; i < k; i++) {
        nums[0] = nums[nums.length - 1];
        nums.pop();
        max_heapify(nums, 0);
    }
    return nums[0];
};

var max_heapify = function (arr, i) {
    if (i < 0 || i >= arr.length) {
        return;
    }
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
    let largest = i;

    if (leftChild < arr.length && arr[leftChild] > arr[largest]) {
        largest = leftChild;
    }
    if (rightChild < arr.length && arr[rightChild] > arr[largest]) {
        largest = rightChild;
    }
    if (largest !== i) {
        // swap
        let temp = arr[largest];
        arr[largest] = arr[i];
        arr[i] = temp;

        max_heapify(arr, largest);
    }
} /* Complexity => O(log n) */

var build_max_heap = function (arr) {
    let start = Math.floor(arr.length / 2);
    for (let i = start; i >= 0; i--) {
        max_heapify(arr, i);
    }
} /* Complexity => O(n) */