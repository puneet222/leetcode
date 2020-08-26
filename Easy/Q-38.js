/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let arr = ["1", "1"];
    for (let i = 2; i <= n; i++) {
        let cs = "";
        let str = arr[i - 1];
        let curr = str[0];
        let count = 1;
        for (let j = 1; j < str.length; j++) {
            if (str[j] === curr) {
                count++;
            } else {
                cs += count + curr;
                curr = str[j];
                count = 1;
            }
        }
        cs += count + curr;
        arr[i] = cs;
    }
    return arr[n];
};