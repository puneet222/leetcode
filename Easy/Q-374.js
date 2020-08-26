/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    return getGuessNumber(1, n);
};

var getGuessNumber = function (i, j) {
    let num = Math.floor((i + j) / 2);
    let result = guess(num);
    if (result === 0) {
        return num;
    } else if (result === 1) {
        return getGuessNumber(num + 1, j);
    } else {
        return getGuessNumber(i, num - 1);
    }
}