/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
    let memo = new Array(arr.length).fill(-1);

    const getMaxSum = function (start) {
        if (start >= arr.length) return 0;
        if (start === arr.length - 1) {
            memo[start] = arr[start];
            return arr[start];
        }
        if (memo[start] !== -1) return memo[start];

        let i = start, max = -Infinity, maxNum = -Infinity;
        while (i < arr.length && i < (start + k)) {
            maxNum = Math.max(maxNum, arr[i]);
            let possible = maxNum * (i - start + 1) + getMaxSum(i + 1);
            max = Math.max(max, possible);
            i++;
        }
        memo[start] = max;
        return max;
    }

    getMaxSum(0);
    return memo[0];
};