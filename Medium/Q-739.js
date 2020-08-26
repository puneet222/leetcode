/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let stack = [T[0]];
    let index = [0];
    let sol = new Array(T.length).fill(0);
    for (let i = 1; i < T.length; i++) {
        let top = stack[stack.length - 1];
        let tIndex = index[index.length - 1];
        while (stack.length > 0 && top < T[i]) {
            sol[tIndex] = i - tIndex;
            stack.pop();
            index.pop();
            top = stack.length > 0 ? stack[stack.length - 1] : 0;
            tIndex = index.length > 0 ? index[index.length - 1] : 0;
        }
        stack.push(T[i]);
        index.push(i);
    }
    return sol;
};

