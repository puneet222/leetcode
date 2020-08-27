/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    let steps = 0;
    let bits = [...s];
    while (bits.length > 1) {
        let top = bits[bits.length - 1];
        if (top === '0') {
            steps++;
            bits.pop();
        } else {
            let cost = 2;
            bits.pop();
            while (bits.length > 0 && bits[bits.length - 1] === '1') {
                cost++;
                bits.pop();
            }
            bits[bits.length - 1] = '1';
            steps += cost;
        }
    }
    return steps;
};

