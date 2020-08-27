/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function (arr1, arr2) {
    let max = -Infinity;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            let num = Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[j] - arr2[i]) + Math.abs(i - j);
            if (num > max && i != j) {
                max = num;
            }
        }
    }
    return max;
};