/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
    let level = getLevel(label);
    let leftIndex = getIndex(label, level);
    let rightIndex = Math.pow(2, (level - 1)) - leftIndex - 1;
    let path = [];
    if (level % 2 === 0) {
        let temp = leftIndex;
        leftIndex = rightIndex;
        rightIndex = temp;
    }
    while (level !== 0) {
        let index = level % 2 === 0 ? rightIndex : leftIndex;
        path.push(Math.pow(2, (level - 1)) + index);
        level--;
        leftIndex = Math.floor(leftIndex / 2);
        rightIndex = Math.floor(rightIndex / 2);
    }
    return path.reverse();
};

var getIndex = function (label, level) {
    let index = label - Math.pow(2, (level - 1));
    return index;
}

var getLevel = function (label) {
    let level = 0, i = 0;
    while (1) {
        let x = Math.pow(2, i);
        if (x > label) {
            level = i;
            break;
        }
        i++;
    }
    return level;
}