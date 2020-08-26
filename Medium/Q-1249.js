/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            let str = "";
            while (stack.length > 0 && stack[stack.length - 1] != '(') {
                str = stack.pop() + str;
            }
            if (stack.length > 0) {
                stack.pop();
                str = '(' + str + ')';
            }
            if (str.length > 0) {
                stack.push(str);
            }
        } else {
            stack.push(s[i]);
        }
    }
    stack = stack.filter(e => e !== '(');
    return stack.join("");
};