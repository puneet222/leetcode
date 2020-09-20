/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let visited = new Array(rooms.length).fill(false);
    visited[0] = true;
    let keys = [];
    for (let i = 0; i < rooms[0].length; i++) {
        if (!visited[rooms[0][i]]) {
            keys.push(rooms[0][i]);
        }
    }
    while (keys.length > 0) {
        let room = keys.pop();
        visited[room] = true;
        for (let i = 0; i < rooms[room].length; i++) {
            if (!visited[rooms[room][i]]) {
                keys.push(rooms[room][i]);
            }
        }
    }
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            return false;
        }
    }
    return true;
};