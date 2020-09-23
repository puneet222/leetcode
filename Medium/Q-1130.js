/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
    let cost = 0;
    while (arr.length > 1) {
        let minProduct = Infinity;
        let index = -1;
        for (let i = 0; i < arr.length - 1; i++) {
            let product = arr[i] * arr[i + 1];
            if (product < minProduct) {
                minProduct = product;
                index = arr[i] < arr[i + 1] ? i : i + 1;
            }
        }
        cost += minProduct;
        arr.splice(index, 1);
    }
    return cost;
};