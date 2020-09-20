/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let map = new Map();
    nums.forEach((num, i) => {
        let arr = map.has(num) ? map.get(num) : [];
        arr.push(i);
        map.set(num, arr);
    });
    let sol = new Array(nums.length);
    let count = 0;
    let keys = [...map.keys()].sort((a, b) => a - b);
    keys.forEach(key => {
        let indices = map.get(key);
        indices.forEach(index => {
            sol[index] = count;
        });
        count += indices.length;
    });
    return sol;
};