/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    let arr = [];
    intervals.forEach((interval, i) => {
        let obj = {
            start: interval[0],
            index: i
        };
        arr.push(obj);
    });
    arr.sort((a, b) => a.start - b.start);
    let sol = [];
    intervals.forEach((interval, i) => {
        let right = getRightInterval(arr, interval[1]);
        sol.push(right);
    });
    return sol;
};

var getRightInterval = function (arr, key) {
    let i = 0, j = arr.length - 1;
    let idx = -1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (arr[mid].start < key) {
            i = mid + 1;
        } else {
            j = mid - 1;
            idx = arr[mid].index;
        }
    }
    return idx;
}