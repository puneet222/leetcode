/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    let stack1 = [];
    let stack2 = [];
    [...S].forEach(c => {
        if (c === '#') {
            if (stack1.length > 0) stack1.pop();
        } else {
            stack1.push(c);
        }
    });
    [...T].forEach(c => {
        if (c === '#') {
            if (stack2.length > 0) stack2.pop();
        } else {
            stack2.push(c);
        }
    });
    return stack1.join("") === stack2.join("");
};