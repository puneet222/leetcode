/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    let stack = [];
    let count = 0;
    [...S].forEach(c => {
        if (c === '(') {
            stack.push(c);
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {
                count++;
            }
        }
    });
    count += stack.length;
    return count;
};