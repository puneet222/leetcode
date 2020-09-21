/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
    let visited = new Array(arr.length).fill(false);
    let queue = [start];
    while (queue.length > 0) {
        let index = queue.pop();
        if (!visited[index]) {
            visited[index] = true;
            if (arr[index] === 0) {
                return true;
            }
            let next = index + arr[index];
            if (next < arr.length && !visited[next]) {
                queue.push(next);
            }
            next = index - arr[index];
            if (next >= 0 && !visited[next]) {
                queue.push(next);
            }
        }
    }
    return false;
};