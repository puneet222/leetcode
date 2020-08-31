/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let arr = [], sol = [];
    let map = new Map();

    words.forEach(word => {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    });
    [...map.keys()].forEach(key => {
        let obj = {
            word: key,
            freq: map.get(key)
        };
        arr.push(obj);
    });
    build_max_heap(arr);

    for (let i = 0; i < k; i++) {
        sol.push(arr[0]["word"]);
        arr[0] = arr[arr.length - 1];
        arr.pop();
        max_heapify(arr, 0);
    }
    return sol;
};

var build_max_heap = function (arr) {
    let start = Math.floor(arr.length / 2);
    for (let i = start; i >= 0; i--) {
        max_heapify(arr, i);
    }
}

var max_heapify = function (arr, i) {
    let lChild = 2 * i + 1;
    let rChild = 2 * i + 2;
    let largest = i;
    if (lChild < arr.length && arr[lChild]["freq"] >= arr[largest]["freq"]) {
        if (arr[lChild]["freq"] === arr[largest]["freq"]) {
            if (arr[lChild]["word"] < arr[largest]["word"]) {
                largest = lChild;
            }
        } else {
            largest = lChild;
        }
    }
    if (rChild < arr.length && arr[rChild]["freq"] >= arr[largest]["freq"]) {
        if (arr[rChild]["freq"] === arr[largest]["freq"]) {
            if (arr[rChild]["word"] < arr[largest]["word"]) {
                largest = rChild;
            }
        } else {
            largest = rChild;
        }
    }
    if (largest !== i) {
        let temp = arr[largest];
        arr[largest] = arr[i];
        arr[i] = temp;

        max_heapify(arr, largest);
    }
}