/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    let stack = [];
    let cntStack = [];
    s.forEach(ch => {
        if (stack.length > 0) {
            let tCount = 1;
            if (stack[stack.length - 1] === ch) {
                tCount = cntStack[cntStack.length - 1] + 1;
            }
            stack.push(ch);
            cntStack.push(tCount);
            if (tCount === k) {
                for (let i = 0; i < k; i++) {
                    stack.pop();
                    cntStack.pop();
                }
            }
        } else {
            stack.push(ch);
            cntStack.push(1);
        }
    });
    return stack.join("");
};