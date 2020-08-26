/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let paren = [];
    const generate = (str, l, r) => {
        if (l === 0 && r === 0) {
            paren.push(str);
            return;
        }
        if (l === 0) {
            while (r !== 0) {
                str += ')';
                r--;
            }
            paren.push(str);
            return;
        }
        if (l > 0) {
            let nl = l - 1;
            generate(str + '(', nl, r);
        }
        if (l !== r && l < r) {
            let nr = r - 1;
            generate(str + ')', l, --r);
        }
    }

    generate('', n, n);
    return paren;
};