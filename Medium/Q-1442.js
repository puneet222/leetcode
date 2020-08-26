/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            x = x ^ arr[j];
            if (x === 0) {
                count = count + j - i;
            }
        }
    }
    return count;
};