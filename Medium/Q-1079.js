/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    let set = new Set();
    let arr = [];
    getPossibilities(arr, tiles, set);
    return set.size;
};

var getPossibilities = function (arr, tiles, set) {
    if (arr.length === tiles.length) {
        return;
    }
    for (let i = 0; i < tiles.length; i++) {
        if (!arr.has(i)) {
            arr.push(i);
            set.add(getTiles(arr, tiles));
            getPossibilities(arr, tiles, set);
            arr.pop();
        }
    }
}

var getTiles = function (arr, tiles) {
    let str = "";
    arr.forEach(idx => str += tiles[idx]);
    return str;
}

Array.prototype.has = function (e) {
    let idx = this.findIndex(ele => ele === e);
    return idx === -1 ? false : true;
}