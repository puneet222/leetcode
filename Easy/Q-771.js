/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let map = new Map();
    [...J].forEach(ch => {
        map.set(ch, true);
    });
    let jewels = 0;
    [...S].forEach(ch => {
        if (map.has(ch)) {
            jewels++;
        }
    });
    return jewels;
};