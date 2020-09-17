/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let max = -Infinity;
    candies.forEach(candy => {
        if (candy > max) {
            max = candy;
        }
    });
    return candies.map(candy => {
        if (candy + extraCandies >= max) {
            return true;
        } else {
            return false;
        }
    });
};