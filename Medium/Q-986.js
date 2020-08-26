/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
    let i = 0, j = 0;
    let sol = [];
    while (i < A.length && j < B.length) {
        let temp = [0, 0];
        temp[0] = Math.max(A[i][0], B[j][0]);
        temp[1] = Math.min(A[i][1], B[j][1]);
        if (temp[0] <= temp[1]) sol.push(temp);
        if (A[i][1] < B[j][1]) i++;
        else j++;
    }
    return sol;
};