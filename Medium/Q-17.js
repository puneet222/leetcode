/**
 * @param {string} digits
 * @return {string[]}
 */

let map = new Map();
map.set("2", "abc");
map.set("3", "def");
map.set("4", "ghi");
map.set("5", "jkl");
map.set("6", "mno");
map.set("7", "pqrs");
map.set("8", "tuv");
map.set("9", "wxyz");

var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    if (digits.length === 1) {
        return [...map.get(digits)];
    }
    let d = digits[0];
    let result = [];
    let sol = letterCombinations(digits.substring(1));
    [...map.get(d)].forEach(letter => {
        for (let i = 0; i < sol.length; i++) {
            let c = letter + sol[i];
            result.push(c);
        }
    });
    return result;
};