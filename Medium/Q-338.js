/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let sol = [];
    for (let i = 0; i <= num; i++) {
        let bits = i.toString(2);
        let count = 0;
        [...bits].forEach(bit => {
            if (bit === '1') {
                count++;
            }
        });
        sol.push(count);
    }
    return sol;
};