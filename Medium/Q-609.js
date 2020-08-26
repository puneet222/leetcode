/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
    let map = new Map();
    paths.forEach((path, index) => {
        let dirs = path.split("/");
        let pathFiles = dirs.pop();
        let files = pathFiles.split(" ");
        let lastDir = files.shift();
        dirs.push(lastDir);
        files.forEach(file => {
            let allCont = file.split("(");
            let content = allCont[1].substring(0, allCont[1].length - 1);
            let fileName = allCont[0];
            let allDirs = Array.from(dirs);
            allDirs.push(fileName);
            if (map.has(content)) {
                let allPaths = map.get(content);
                allPaths.push(allDirs);
                map.set(content, allPaths);
            } else {
                map.set(content, [allDirs]);
            }
        });
    });
    let sol = [];
    [...map.values()].forEach(value => {
        let paths = [];
        value.forEach(path => paths.push(path.join("/")));
        if (paths.length > 1) {
            sol.push(paths);
        }
    });
    return sol;
};