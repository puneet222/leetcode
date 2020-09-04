/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    let travelled = [], gold = 0;
    for (let i = 0; i < grid.length; i++) {
        travelled.push([]);
        for (let j = 0; j < grid[0].length; j++) {
            travelled[i].push(false);
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0) {
                travelled[i][j] = true;
                let currGold = getGold(grid, i, j, travelled);
                travelled[i][j] = false;
                gold = Math.max(gold, currGold);
            }
        }
    }
    return gold;
};

var getGold = function (grid, i, j, travelled) {
    let gold = 0;
    if (i - 1 >= 0 && grid[i - 1][j] > 0 && !travelled[i - 1][j]) {
        travelled[i - 1][j] = true;
        gold = Math.max(gold, getGold(grid, i - 1, j, travelled));
        travelled[i - 1][j] = false;
    }
    if (i + 1 < grid.length && grid[i + 1][j] > 0 && !travelled[i + 1][j]) {
        travelled[i + 1][j] = true;
        gold = Math.max(gold, getGold(grid, i + 1, j, travelled));
        travelled[i + 1][j] = false;
    }
    if (j - 1 >= 0 && grid[i][j - 1] > 0 && !travelled[i][j - 1]) {
        travelled[i][j - 1] = true;
        gold = Math.max(gold, getGold(grid, i, j - 1, travelled));
        travelled[i][j - 1] = false;
    }
    if (j + 1 < grid[0].length && grid[i][j + 1] > 0 && !travelled[i][j + 1]) {
        travelled[i][j + 1] = true;
        gold = Math.max(gold, getGold(grid, i, j + 1, travelled));
        travelled[i][j + 1] = false;
    }
    return grid[i][j] + gold;
}