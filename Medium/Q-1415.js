/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    let strings = getAllStrings('', n);
    return strings.length < k ? "" : strings[k - 1];
};

var getAllStrings = function (str, n) {
    let start = 'a'.charCodeAt();
    let sol = [];
    for (let i = start; i < start + 3; i++) {
        let ch = String.fromCharCode(i);
        if (str.length === 0 || str[str.length - 1] !== ch) {
            let nstr = str + ch;
            if (n === 1) {
                sol.push(nstr);
            } else {
                let arr = getAllStrings(nstr, n - 1);
                sol = [...sol, ...arr];
            }
        }
    }
    return sol;
}