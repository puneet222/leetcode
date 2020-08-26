/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    let obj = {};
    let currentWord = "";
    words.forEach(word => obj[word] = true);
    words.forEach(word => {
        let str = "";
        let found = true;
        if (word.length >= currentWord.length) {
            for (let i = 0; i < word.length - 1; i++) {
                str += word[i];
                if (!obj[str]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                currentWord = getWord(word, currentWord);
            }
        }
    });
    return currentWord;
};

var getWord = function (str, word) {
    if (str.length === word.length) {
        word = str < word ? str : word;
    } else if (str.length > word.length) {
        word = str;
    }
    return word;
}