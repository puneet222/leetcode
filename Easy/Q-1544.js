/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = [];
    [...s].forEach(c => {
        if (stack.length > 0) {
            let top = stack[stack.length - 1];
            if (Math.abs(top.charCodeAt() - c.charCodeAt()) === 32) {
                stack.pop();
            } else {
                stack.push(c);
            }
        } else {
            stack.push(c);
        }
    });
    return stack.join("");
};