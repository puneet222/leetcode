/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let cnt = 0;
    let cntR = 0;
    let cntL = 0;
    [...s].forEach(ch => {
        if (ch === 'R') {
            cntR++;
        } else {
            cntL++;
        }
        if (cntR === cntL) {
            cnt++;
        }
    });
    return cnt;
};