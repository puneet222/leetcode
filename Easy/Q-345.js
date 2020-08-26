/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowels = [];
    let charArr = [...s];
    for (let i = 0; i < charArr.length; i++) {
        if (set.has(charArr[i])) {
            vowels.push(charArr[i]);
            charArr[i] = '|';
        }
    }
    vowels.reverse();
    let ptr = 0;
    for (let i = 0; i < charArr.length; i++) {
        if (charArr[i] === '|') {
            charArr[i] = vowels[ptr];
            ptr++;
        }
    }
    return charArr.join('');
};