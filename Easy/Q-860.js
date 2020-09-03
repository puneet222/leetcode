/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let map = new Map();
    map.set(5, 0);
    map.set(10, 0);
    map.set(20, 0);
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            map.set(5, map.get(5) + 1);
        }
        else if (bills[i] === 10) {
            if (map.get(5) > 0) {
                map.set(5, map.get(5) - 1);
                map.set(10, map.get(10) + 1);
            } else {
                return false;
            }
        } else {
            if (map.get(10) > 0 && map.get(5) > 0) {
                map.set(5, map.get(5) - 1);
                map.set(10, map.get(10) - 1);
            } else if (map.get(5) >= 3) {
                map.set(5, map.get(5) - 3);
            } else {
                return false;
            }
        }

    }
    return true;
};