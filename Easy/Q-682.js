/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let sol = [];
    ops.forEach(op => {
        if (op === 'C' && sol.length > 0) {
            sol.pop();
        } else if (op === 'D' && sol.length > 0) {
            let top = sol[sol.length - 1];
            sol.push(top * 2);
        } else if (op === '+') {
            let top1 = sol[sol.length - 1];
            let top2 = sol[sol.length - 2];
            sol.push(top1 + top2);
        } else {
            sol.push(Number(op));
        }
    });
    let reducer = (acc, val) => acc + val;
    return sol.reduce(reducer, 0);
}