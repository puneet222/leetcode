/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    if (N === 1) return N;
    let trustMap = new Map();
    let trustedMap = new Map();
    trust.forEach(val => {
        let persons = trustMap.has(val[0]) ? trustMap.get(val[0]) : [];
        let trustPersons = trustedMap.has(val[1]) ? trustedMap.get(val[1]) : [];
        persons.push(val[1]);
        trustPersons.push(val[0]);
        trustMap.set(val[0], persons);
        trustedMap.set(val[1], trustPersons);
    });
    let judge = -1;
    for (let i = 1; i <= N; i++) {
        if (!trustMap.has(i) && trustedMap.has(i) && trustedMap.get(i).length === (N - 1)) {
            judge = i;
        }
    }
    return judge;
};