/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let bin = "";
    let count0 = 0, count1 = 0;
    let b = 0;
    while (b < 32) {
        count0 = 0;
        count1 = 0;
        for (let i = 0; i < nums.length; i++) {
            let bit = nums[i] & 1;
            if (bit === 0) {
                count0++;
            } else {
                count1++;
            }
            nums[i] = nums[i] >> 1;
        }
        bin += count0 % 3 === 0 ? "1" : "0";
        b++;
    }
    bin = [...bin].reverse().join("");
    if (bin[0] === '1') {
        // negative
        let num = parseInt(bin, 2);
        num = ~num;
        num++;
        return -num;
    } else {
        return parseInt(bin, 2);
    }

};