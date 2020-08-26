/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
    let A = 0, B = 0;
    let res = [];
    [...seq].forEach(c => {
        if (c === '(') {
            if (A < B) {
                A++;
                res.push(0);
            } else {
                B++;
                res.push(1);
            }
        } else {
            if (A > B) {
                A--;
                res.push(0);
            } else {
                B--;
                res.push(1);
            }
        }
    });
    return res;
};