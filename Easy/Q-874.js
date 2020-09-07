/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    let x = 0, y = 0;
    let opAxis = 'Y', op = 1;
    let max = -Infinity;
    let set = new Set();
    obstacles.forEach(obstacle => {
        set.add(`${obstacle[0]}-${obstacle[1]}`);
    });
    commands.forEach(command => {
        if (command === -2) {
            op = opAxis === 'Y' ? -op : op;
            opAxis = opAxis === 'Y' ? 'X' : 'Y';
        }
        else if (command === -1) {
            op = opAxis === 'X' ? -op : op;
            opAxis = opAxis === 'X' ? 'Y' : 'X'
        }
        else {
            let dx = x, dy = y;
            while (command !== 0) {
                dx += opAxis === 'X' ? op : 0;
                dy += opAxis === 'Y' ? op : 0;
                if (set.has(`${dx}-${dy}`)) {
                    break;
                }
                x = dx;
                y = dy;
                command--;
            }
            max = Math.max(max, (Math.pow(x, 2) + Math.pow(y, 2)));
        }
    });
    return max;
};