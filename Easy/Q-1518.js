/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let count = numBottles;
    let empty = numBottles;
    while (empty >= numExchange) {
        let drinks = Math.floor(empty / numExchange);
        count += drinks;
        empty = drinks + empty % numExchange;
    }
    return count;
};