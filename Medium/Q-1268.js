/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    products = products.sort();
    let sol = [];
    let prefix = '';
    [...searchWord].forEach(c => {
        prefix += c;
        let suggestions = products.filter(product => product.startsWith(prefix));
        sol.push(suggestions.slice(0, 3));
    });
    return sol;
};