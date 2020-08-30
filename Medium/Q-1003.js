/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'c') {
            if (stack.length >= 2) {
                let B = stack.pop();
                let A = stack.pop();
                if (B !== 'b' || A !== 'a') {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length > 0 ? false : true;
};

// var isValid = function(s) {
//     let cntA = 0;
//     let cntB = 0;
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === 'a') cntA++;
//         if(s[i] === 'b') {
//             cntA--;
//             cntB++;
//         }
//         if(s[i] === 'c') cntB--;
//         if(cntA < 0 || cntB < 0) {
//             return false;
//         }
//         if(s[i] === 'b' && s[i-1] === 'b') {
//             return false;
//         }
//         if(s[i] === 'c' && s[i-1] === 'a') {
//             return false;
//         }
//     }
//     if(cntA === 0 && cntB === 0) {
//         return true;
//     }
//     return false;
// };