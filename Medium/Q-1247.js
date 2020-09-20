/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function (s1, s2) {
    let swaps = 0;
    let xdiff = 0, ydiff = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (s1[i] === 'x') {
                xdiff++;
            } else {
                ydiff++;
            }
        }
    }
    swaps += Math.floor(xdiff / 2) + Math.floor(ydiff / 2);
    xdiff = xdiff % 2;
    ydiff = ydiff % 2;
    if (xdiff === ydiff) {
        swaps += xdiff + ydiff;
        return swaps;
    } else {
        return -1;
    }
};