/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let map = new Map();
    let minIndex = 99999;
    let sol = [];
    list1.forEach((restaurant, i) => map.set(restaurant, i));
    let indexObj = {};
    for (let i = 0; i < list2.length; i++) {
        if (map.has(list2[i])) {
            let index = i + map.get(list2[i]);
            if (index < minIndex) {
                minIndex = index;
                sol = [list2[i]];
            } else if (index === minIndex) {
                sol.push(list2[i]);
            }
        }
    }
    return sol;
};