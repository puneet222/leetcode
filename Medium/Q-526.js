/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
    let count = 0;
    let array = new Array(N).fill(0);

    const arrange = (num, arr) => {
        if (num > N) {
            count++;
            return;
        }
        for (let pos = 0; pos < N; pos++) {
            if (arr[pos] === 0) {
                arr[pos] = num;
                if (isBeautifulPosition(arr, pos)) {
                    arrange(num + 1, arr);
                }
                arr[pos] = 0;
            }
        }
    }
    arrange(1, array);
    return count;
};

var isBeautifulPosition = function (arr, pos) {
    if ((arr[pos] % (pos + 1) === 0) || ((pos + 1) % arr[pos] === 0)) {
        return true;
    }
    return false;
}