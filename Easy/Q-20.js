/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let valid = true;
    let st = [];
    let closeBrack = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            st.push(s[i]);
        } else {
            let expBrack = closeBrack[s[i]];
            let actBrack = st.pop();
            if (expBrack !== actBrack) {
                valid = false;
                break;
            }
        }
    }
    return valid ? st.length > 0 ? false : true : false;
};