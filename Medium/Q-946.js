/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    if (pushed.length === 0) {
        return true;
    }
    let stack = [];
    let i = 0, j = 0;
    stack.push(pushed[i]);
    while (stack.length > 0) {
        let top = stack[stack.length - 1];
        if (top === popped[j]) {
            stack.pop();
            j++;
            if (stack.length === 0 && i < (pushed.length - 1)) {
                i = i + 1;
                stack.push(pushed[i]);
            }
        } else {
            i = i + 1;
            if (i >= pushed.length) {
                return false;
            } else {
                stack.push(pushed[i]);
            }
        }
    }
    return true;
};