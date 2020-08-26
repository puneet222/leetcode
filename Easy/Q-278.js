/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let i = 1, j = n;
        while (i <= j) {
            let mid = Math.floor((i + j) / 2);
            if (isBadVersion(mid)) {
                if (isBadVersion(mid - 1)) {
                    j = mid - 1;
                } else {
                    return mid;
                }
            } else {
                i = mid + 1;
            }
        }
    };
};