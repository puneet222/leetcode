/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    return permute(S, 0);
};

var permute = function (S, i) {
    if (i === S.length) {
        return [];
    }
    let res = permute(S, i + 1);
    let newRes = [];
    if (!Number(S[i]) && S[i] !== '0') {
        let lc = S[i].toLowerCase();
        let uc = S[i].toUpperCase();
        if (res.length === 0) {
            newRes.push(lc);
            newRes.push(uc);
        } else {
            res.forEach(r => {
                newRes.push(lc + r);
                newRes.push(uc + r);
            });
        }
    } else {
        if (res.length === 0) {
            newRes.push(S[i]);
        } else {
            res.forEach(r => {
                let element = S[i] + r;
                newRes.push(element);
            });
        }
    }
    return newRes;
}