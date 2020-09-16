/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    if (s.length === 0) return [[]];
    if (s.length === 1) return [[s]];
    let sol = [];
    for (let i = 0; i < s.length; i++) {
        let substr = s.substring(0, i + 1);
        if (isPalindrome(substr)) {
            let remaining = s.substring(i + 1);
            let parts = partition(remaining);
            parts.forEach(part => {
                part.unshift(substr)
            });
            sol = [...sol, ...parts];
        }
    }
    return sol;
};

var isPalindrome = function (s) {
    let i = 0, j = s.length - 1;
    let palin = true;
    while (i < j) {
        if (s[i] !== s[j]) {
            palin = false;
            break;
        }
        i++;
        j--;
    }
    return palin;
}