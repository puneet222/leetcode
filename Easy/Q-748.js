/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    licensePlate = licensePlate.toLocaleLowerCase();
    let map = new Map();
    let sol = "";
    [...licensePlate].forEach(ch => {
        if (!Number(ch) && ch !== ' ' && ch !== '0') {
            if (map.get(ch)) {
                map.set(ch, map.get(ch) + 1);
            } else {
                map.set(ch, 1);
            }
        }
    });
    words.forEach(word => {
        let tempMap = new Map(map);
        [...word].forEach(letter => {
            if (tempMap.get(letter)) {
                tempMap.set(letter, tempMap.get(letter) - 1);
            }
        });
        let found = true;
        tempMap.forEach((value, key) => {
            if (value > 0) {
                found = false;
            }
        });
        if (found && (sol === "" || word.length < sol.length)) {
            sol = word;
        }
    });
    return sol;
};