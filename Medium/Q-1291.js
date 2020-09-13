/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let sol = [];
    let lowLen = getLength(low);
    let highLen = getLength(high);
    for(let digit = lowLen; digit <= highLen; digit++) {
        for(let start = 1; start <= (10 - digit); start++) {
            let num = 0;
            let s = start;
            for(let i = 0; i < digit; i++) {
                num = num*10 + s;
                s++;
            }
            if(num >= low && num <= high) {
                sol.push(num);
            }
            if(num > high) break;
        }
    }
    return sol;
};

var getLength = function(num) {
    let len = 0;
    while(num != 0) {
        len++;
        num = Math.floor(num/10);
    }
    return len;
}