/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let ptr1 = 0;
    let ptr2 = numbers.length - 1;
    let sol = [];
    while (ptr1 < ptr2) {
        let sum = numbers[ptr1] + numbers[ptr2];
        if (sum === target) {
            sol.push(ptr1 + 1);
            sol.push(ptr2 + 1);
            return sol;
        }
        if (sum < target) {
            ptr1++;
        } else {
            ptr2--;
        }
    }
    return sol;
};