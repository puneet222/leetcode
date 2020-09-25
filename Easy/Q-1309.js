/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let stack = [];
    let arr = [];
    s = [...s].reverse();
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            let num = Number(s[i + 2] + s[i + 1]);
            stack.push(String.fromCharCode(num + 96));
            i = i + 2;
        } else {
            stack.push(String.fromCharCode(Number(s[i]) + 96));
        }
    }
    return stack.reverse().join("");
};