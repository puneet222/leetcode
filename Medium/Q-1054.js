/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
    let map = new Map();
    barcodes.forEach(barcode => {
        if (map.has(barcode)) {
            map.set(barcode, map.get(barcode) + 1);
        } else {
            map.set(barcode, 1);
        }
    });
    let codes = [...map.keys()];
    build_heap(codes, map);

    let str = [];

    while (codes.length > 0) {
        let start = extract_max(codes, map);
        str.push(start);
        if (codes.length === 0) {
            break;
        }
        let secondMin = extract_max(codes, map);
        str.push(secondMin);
        if (map.get(start) > 0) {
            codes.push(start);
            max_heapify_up(codes, codes.length - 1, map);
        }
        if (map.get(secondMin) > 0) {
            codes.push(secondMin);
            max_heapify_up(codes, codes.length - 1, map);
        }
    }
    return str;
};

var max_heapify = function (codes, i, map) {
    let c1 = 2 * i + 1;
    let c2 = 2 * i + 2;
    let largest = i;

    if (c1 < codes.length && map.get(codes[c1]) > map.get(codes[largest])) {
        largest = c1;
    }
    if (c2 < codes.length && map.get(codes[c2]) > map.get(codes[largest])) {
        largest = c2;
    }
    if (largest !== i) {
        let temp = codes[largest];
        codes[largest] = codes[i];
        codes[i] = temp;

        max_heapify(codes, largest, map);
    }
}

var max_heapify_up = function (codes, i, map) {
    let parent = Math.floor((i - 1) / 2);
    if (parent >= 0 && map.get(codes[parent]) < map.get(codes[i])) {
        let temp = codes[parent];
        codes[parent] = codes[i];
        codes[i] = temp;

        max_heapify_up(codes, parent, map);
    }
}

var extract_max = function (codes, map) {
    let min = codes[0];
    codes[0] = codes[codes.length - 1];
    codes.pop();
    map.set(min, map.get(min) - 1);
    max_heapify(codes, 0, map);
    return min;
}

var build_heap = function (codes, map) {
    let start = Math.floor(codes.length / 2);
    for (let i = start; i >= 0; i--) {
        max_heapify(codes, i, map);
    }
}