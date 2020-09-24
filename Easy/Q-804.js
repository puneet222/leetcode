/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let set = new Set();
    let morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    words.forEach(word => {
        let code = "";
        [...word].forEach(ch => {
            let index = ch.charCodeAt() - 97;
            code += morseCode[index];
        });
        set.add(code);
    });
    return set.size;
};