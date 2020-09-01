/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
    this.stack = getCombinations(characters, combinationLength);
    this.stack.reverse();
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
    return this.stack.pop();
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
    return this.stack.length > 0;
};

var getCombinations = function (chars, len) {
    if (chars.length < len) {
        return [];
    }
    if (len === 1) {
        return [...chars];
    }
    if (chars.length === len) {
        return [chars];
    }
    let sol = [];
    for (let i = 0; i < chars.length - 1; i++) {
        let substr = chars.substring(i + 1);
        let arr = getCombinations(substr, len - 1);
        if (arr.length > 0) {
            for (let idx = 0; idx < arr.length; idx++) {
                arr[idx] = chars[i] + arr[idx];
            }
        }
        sol = [...sol, ...arr];
    }
    return sol;
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */