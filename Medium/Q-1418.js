/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    let dishes = {};
    let displayTableObj = {};
    orders.forEach(order => {
        if (!displayTableObj[order[1]]) {
            displayTableObj[order[1]] = {}
        }
        if (!displayTableObj[order[1]][order[2]]) {
            displayTableObj[order[1]][order[2]] = 1;
        } else {
            displayTableObj[order[1]][order[2]] = displayTableObj[order[1]][order[2]] + 1;
        }
        dishes[order[2]] = true;
    });
    let displayTable = [["Table"]];
    let sortedDishes = Object.keys(dishes).sort();
    displayTable[0].push(...sortedDishes);
    Object.keys(displayTableObj).forEach(table => {
        let dp = [];
        dp.push(table);
        let tableInfo = displayTableObj[table];
        sortedDishes.forEach(dish => {
            if (tableInfo[dish]) {
                dp.push(tableInfo[dish].toString());
            } else {
                dp.push("0")
            }
        });
        displayTable.push(dp);
    });
    return displayTable;
};