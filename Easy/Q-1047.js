/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    let stack = [];
    stack.push(S[0]);
    for (let i = 1; i < S.length; i++) {
        if (stack.length > 0) {
            if (stack[stack.length - 1] === S[i]) {
                stack.pop();
            } else {
                stack.push(S[i]);
            }
        } else {
            stack.push(S[i]);
        }
    }
    return stack.join('');
};