/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function (piles, H) {
    let minS = 1;
    let maxS = Math.max(...piles);
    let minSpeed = Infinity;
    while (minS <= maxS) {
        let mid = Math.floor((minS + maxS) / 2);
        let hours = getHours(piles, mid);
        if (hours > H) {
            minS = mid + 1;
        } else {
            maxS = mid - 1;
            minSpeed = Math.min(minSpeed, mid);
        }
    }
    return minSpeed;
};

var getHours = function (piles, speed) {
    let hours = 0;
    piles.forEach(pile => {
        hours += Math.ceil(pile / speed);
    });
    return hours;
}