/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let trie = new Trie();
    strs.forEach(str => {
        trie.insert(str);
    });
    let prefix = "";
    while (trie) {
        if (trie.keys.length === 1 && trie.isWord === false) {
            prefix += trie.keys[0];
            let code = trie.keys[0].charCodeAt() - 97;
            trie = trie.map[code];
        } else {
            break;
        }
    }
    return prefix;
};

var Trie = function () {
    this.map = new Array(26);
    this.keys = [];
    this.isWord = false;
}

Trie.prototype.insert = function (word) {
    let trie = this;
    [...word].forEach(c => {
        let code = c.charCodeAt() - 97;
        if (trie.map[code]) {
            trie = trie.map[code];
        } else {
            trie.map[code] = new Trie();
            trie.keys.push(c);
            trie = trie.map[code];
        }
    });
    trie.isWord = true;
}