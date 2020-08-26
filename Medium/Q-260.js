/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let xor = 0;
    nums.forEach(num => xor ^= num);
    let bitpos = 0;
    while (xor) {
        if ((xor & 1) == 1) break;
        xor = xor >> 1;
        bitpos++;
    }
    let num1 = 0, num2 = 0;
    nums.forEach(num => {
        if ((num & (1 << bitpos)) === 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    });
    return [num1, num2];
};  