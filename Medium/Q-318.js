/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let map = new Map();
    words.forEach(word => {
        let bin = new Array(26).fill(0);
        [...word].forEach(ch => {
            let index = ch.charCodeAt() - 97;
            bin[index] = 1;
        });
        map.set(word, bin);
    });
    let max = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let bin1 = map.get(words[i]);
            let bin2 = map.get(words[j]);
            let hasOnes = false;
            for (let ptr = 0; ptr < bin1.length; ptr++) {
                if (bin1[ptr] === 1 && bin2[ptr] === 1) {
                    hasOnes = true;
                    break;
                }
            }
            if (!hasOnes) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};