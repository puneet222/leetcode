/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let map = new Map();
    groupSizes.forEach((group,i) => {
        let arr = map.has(group) ? map.get(group) : [];
        arr.push(i);
        map.set(group, arr);
    });
    let sol = [];
    [...map.keys()].forEach(group => {
        let persons = map.get(group);
        while(persons.length > 0) {
            sol.push(persons.splice(0, group));
        }
    });
    return sol;
};