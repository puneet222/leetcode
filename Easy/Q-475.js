/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    houses = houses.sort((a, b) => a - b);
    heaters = heaters.sort((a, b) => a - b);

    let radius = -Infinity;

    houses.forEach(house => {
        let index = closestBinarySearch(heaters, house);
        radius = Math.max(radius, Math.abs(house - heaters[index]));
    });

    return radius;
};

var closestBinarySearch = (arr, key) => {
    let i = 0, j = arr.length - 1;
    let diff = Infinity;
    let index = -1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (arr[mid] === key) {
            return mid;
        }
        let d = Math.abs(arr[mid] - key);
        if (d < diff) {
            diff = d;
            index = mid;
        }
        if (arr[mid] < key) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return index;
}