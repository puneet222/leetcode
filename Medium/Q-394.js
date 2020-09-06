/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = [];
    if (s.length == 0) return s;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            let strArr = [];
            while (stack[stack.length - 1] !== '[') {
                strArr.push(stack.pop());
            }
            stack.pop();
            let str = strArr.reverse().join("");
            let numArr = [];
            while (stack.length > 0 && (Number(stack[stack.length - 1]) || Number(stack[stack.length - 1]) === 0)) {
                numArr.push(stack.pop());
            }
            let n = Number(numArr.reverse().join(""));
            str = str.repeat(n);
            stack.push(str);
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join("");
};