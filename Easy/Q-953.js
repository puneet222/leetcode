/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let map = new Map();
    let chCode = 97;
    [...order].forEach(ch => map.set(ch, String.fromCharCode(chCode++)));
    for (let i = 0; i < words.length; i++) {
        words[i] = getNewWord(words[i], map);
    }
    let newArr = Array.from(words).sort();
    let sol = true;
    for (let i = 0; i < words.length; i++) {
        if (newArr[i] !== words[i]) {
            sol = false;
            break;
        }
    }
    return sol;
};

var getNewWord = function (word, map) {
    word = [...word];
    for (let i = 0; i < word.length; i++) {
        word[i] = map.get(word[i]);
    }
    return word.join('');
}