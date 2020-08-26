/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    let map = {};
    folder.forEach(f => {
        let dirs = f.split("/");
        dirs.shift();
        let current = {};
        if (!map[dirs[0]]) {
            map[dirs[0]] = {};
        }
        current = map[dirs[0]];
        for (let i = 1; i < dirs.length; i++) {
            if (current[dirs[i]]) {
                current = current[dirs[i]];
            } else {
                current[dirs[i]] = {};
                current = current[dirs[i]]
            }
        }
        current["|"] = {};
    });
    let sol = getFolders(map);
    return sol;
};

var getFolders = function (obj) {
    let sol = [];
    // console.log(obj);
    if (obj['|']) {
        return sol;
    } else {
        Object.keys(obj).forEach(key => {
            let sub = getFolders(obj[key]);
            if (sub.length === 0) {
                sol.push('/' + key);
            } else {
                sub.forEach(s => {
                    let dir = '/' + key + s;
                    sol.push(dir);
                });
            }
        });
        return sol;
    }
}