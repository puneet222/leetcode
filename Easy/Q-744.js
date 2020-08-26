/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let ccTarget = target.charCodeAt();
    let last = letters[letters.length - 1].charCodeAt();
    let wrap = false;
    if (ccTarget >= last) {
        wrap = true;
    }
    let ans = -1;
    for (let i = 0; i < letters.length; i++) {
        letters[i] = letters[i].charCodeAt() + (wrap ? 26 : 0);
    }
    let i = 0, j = letters.length - 1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (letters[mid] > ccTarget) {
            if (mid > 0) {
                if (letters[mid - 1] <= ccTarget) {
                    ans = mid;
                    break;
                } else {
                    j = mid - 1;
                }
            } else {
                ans = mid;
                break;
            }
        } else {
            i = mid + 1;
        }
    }
    let code = letters[ans] - (wrap ? 26 : 0);
    return String.fromCharCode(code);
};