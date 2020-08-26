/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
    if (S === '()') {
        return 1;
    }
    let stack = [];
    let brackets = [];
    let comp = "";
    let str = "";
    [...S].forEach(c => {
        if (c === '(') {
            stack.push(c);
        } else {
            let str = "";
            while (stack[stack.length - 1] !== '(') {
                str = stack.pop() + str;
            }
            stack.pop();
            str = `(${str})`;
            stack.push(str);
            if (stack.length === 1) {
                brackets.push(stack.pop());
            }

        }
    });
    if (brackets.length === 1) {
        let bracket = [...brackets[0]];
        bracket.pop();
        bracket.shift();
        return 2 * scoreOfParentheses(bracket.join(""));
    } else {
        let score = 0;
        brackets.forEach(bracket => {
            score += scoreOfParentheses(bracket);
        });
        return score;
    }
};