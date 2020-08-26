/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
    let count = 0;
    let prev = target[0];
    let sw = prev === '0' ? false : true;
    let isOff = sw;
    for (let i = 0; i < target.length; i++) {
        if (target[i] === '1' && sw === false) {
            count++;
            sw = true;
        } else if (target[i] === '0' && sw === true) {
            count++;
            sw = false;
        }
    }
    return isOff ? count + 1 : count;
};