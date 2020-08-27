/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */

const START_INDEX = 97;

var Trie = function () {
    this.node = new Array(26);
    this.isWord = false;
    this.word = null;
}

Trie.prototype.add = function (word) {
    let curr = this;
    [...word].forEach(c => {
        let index = c.charCodeAt() - START_INDEX;
        if (!curr.node[index]) {
            curr.node[index] = new Trie();
        }
        curr = curr.node[index];
    });
    curr.isWord = true;
    curr.word = word;
}

Trie.prototype.getRoot = function (word) {
    let curr = this;
    for (let i = 0; i < word.length; i++) {
        let index = word[i].charCodeAt() - START_INDEX;
        if (!curr.node[index]) {
            return word;
        }
        curr = curr.node[index];
        if (curr.isWord) {
            return curr.word;
        }
    }
    return word;
}

var replaceWords = function (dict, sentence) {
    const trie = new Trie();
    let ans = [];
    dict.forEach(word => trie.add(word));
    sentence.split(" ").forEach(word => {
        let root = trie.getRoot(word);
        ans.push(root);
    });
    return ans.join(" ");
};
