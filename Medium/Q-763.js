/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    let map = new Map();
    [...S].forEach((c, i) => map.set(c, i));
    let i = 0;
    let sol = [];
    while (i < S.length) {
        let ptr1 = i;
        let ptr2 = map.get(S[i]);
        while (ptr1 < ptr2) {
            let index = map.get(S[ptr1]);
            if (index > ptr2) {
                ptr2 = index;
            }
            ptr1++;
        }
        sol.push(ptr2 - i + 1);
        i = ptr2 + 1;
    }
    return sol;
};