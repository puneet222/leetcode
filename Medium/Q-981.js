/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    let insertArr = [value, timestamp];
    if (this.map.has(key)) {
        let arr = this.map.get(key);
        arr.push(insertArr);
        this.map.set(key, arr);
    } else {
        this.map.set(key, [insertArr]);
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (this.map.has(key)) {
        let arr = this.map.get(key);
        let i = 0, j = arr.length - 1;
        let index = -1;
        while (i <= j) {
            let mid = Math.floor((i + j) / 2);
            if (arr[mid][1] === timestamp) {
                index = mid;
                break;
            } else if (arr[mid][1] > timestamp) {
                j = mid - 1;
            } else {
                if ((mid + 1) >= arr.length) {
                    index = mid;
                    break;
                } else {
                    if (arr[mid + 1][1] > timestamp) {
                        index = mid;
                        break;
                    } else {
                        i = mid + 1;
                    }
                }
            }
        }
        if (index === -1) {
            return "";
        } else {
            return arr[index][0];
        }
    }
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */