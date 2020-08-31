// Heaps and Heap Sort (Notes are present in google keep)

// refer Youtube's MIT lecture for Heaps 

var min_heapify = function (arr, i) {
    if (i < 0 || i >= arr.length) {
        return;
    }
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
    let minimum = i;

    if (leftChild < arr.length && arr[leftChild] < arr[minimum]) {
        minimum = leftChild;
    }
    if (rightChild < arr.length && arr[rightChild] < arr[minimum]) {
        minimum = rightChild;
    }
    if (minimum !== i) {
        // swap
        let temp = arr[minimum];
        arr[minimum] = arr[i];
        arr[i] = temp;

        min_heapify(arr, minimum);
    }
} /* Complexity => O(log n) */

var build_heap = function (arr) {
    let start = Math.floor(arr.length / 2);
    for (let i = start; i >= 0; i--) {
        min_heapify(arr, i);
    }
} /* Complexity => O(n)    PROOF in notes or refer youtube video */

