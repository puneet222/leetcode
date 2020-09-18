/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let zero = 0;
    let max = -Infinity;
    let ones = 0;
    nums.forEach(num => {
        let op = getOperations(num);
        max = Math.max(max, op.op2);
        ones += op.op1;
    });
    return max + ones;
};

var getOperations = function (num) {
    let op2 = 0;
    let op1 = 0;
    while (num != 0) {
        if (num % 2 === 0) {
            num = num / 2;
            op2++;
        } else {
            num--
            op1++;
        }
    }
    return { op1: op1, op2: op2 };
}