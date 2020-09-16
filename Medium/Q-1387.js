/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
    let powerMap = new Map();
    powerMap.set(1, 0);

    const getPower = function (num) {
        if (powerMap.has(num)) {
            return powerMap.get(num);
        }
        let power = 1;
        if (num % 2 === 0) {
            power += getPower(num / 2);
        } else {
            power += getPower((num * 3) + 1);
        }
        powerMap.set(num, power);
        return power;
    }

    let arr = [];

    for (let i = lo; i <= hi; i++) {
        let p = getPower(i);
        let obj = { num: i, power: p };
        arr.push(obj);
    }
    arr.sort((a, b) => a.power - b.power);
    return arr[k - 1]["num"];
};