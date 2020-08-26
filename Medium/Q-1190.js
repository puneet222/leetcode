'use strict'

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stack = [];
    let arr = [];
    if (s.length === 0) return s;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            while (stack[stack.length - 1] !== '(') {
                arr.push(stack.pop());
            }
            stack.pop();
            stack.push(...arr);
            arr = [];
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};