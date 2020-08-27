/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let obj = {};
    for (const str of strs) {
        let sortedStr = [...str].sort().join("");
        if (obj[sortedStr]) {
            obj[sortedStr].push(str);
        } else {
            obj[sortedStr] = [str];
        }
    }
    return Object.values(obj);
};