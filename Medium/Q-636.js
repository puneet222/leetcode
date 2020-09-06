/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    let stack = [];
    let sol = new Array(n).fill(0);
    let funcObj = getFunctionObj(logs[0]);
    stack.push(funcObj);
    for (let i = 1; i < logs.length; i++) {
        let info = logs[i].split(":");
        info[0] = Number(info[0]);
        info[2] = Number(info[2]);
        if (info[1] === 'start') {
            //push
            let fObj = getFunctionObj(logs[i]);
            stack.push(fObj);
        } else {
            // pop the current function update the elapsed time
            // update the idle time for next function if exists
            let topFunc = stack.pop();
            topFunc["elapsed"] = topFunc["elapsed"] + info[2] - topFunc["start"] + 1;
            sol[topFunc["id"]] += topFunc["elapsed"] - topFunc["idle"];
            if (stack.length > 0) {
                let nextFunc = stack.pop();
                nextFunc["idle"] = nextFunc["idle"] + topFunc["elapsed"];
                stack.push(nextFunc);
            }
        }
    }
    return sol;
};

var getFunctionObj = function (str) {
    let info = str.split(":");
    let obj = {
        id: Number(info[0]),
        start: Number(info[2]),
        elapsed: 0,
        idle: 0
    }
    return obj;
}