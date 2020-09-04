/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
    if (S.length === 1) return S;
    let map = new Map();
    [...S].forEach(ch => {
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1);
        } else {
            map.set(ch, 1);
        }
    });
    let letters = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
    if (map.get(letters[0]) > Math.ceil(S.length / 2)) {
        return "";
    }
    let res = new Array(S.length);
    let idx = 0;
    letters.forEach(letter => {
        for (let i = 0; i < map.get(letter); i++) {
            if (idx >= S.length) idx = 1;
            res[idx] = letter;
            idx += 2;
        }
    })
    return res.join("");
};