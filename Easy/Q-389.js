/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let merged = [...s, ...t];
    let curr = merged[0].charCodeAt();
    let result = curr;
    for (let i = 1; i < merged.length; i++) {
        result = curr ^ merged[i].charCodeAt();
        curr = result;
    }
    return String.fromCharCode(result);
};