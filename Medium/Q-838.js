/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
    let forceL = new Array(dominoes.length).fill(0);
    let forceR = new Array(dominoes.length).fill(0);
    let start = false;
    let MAX = 999999;
    let count = MAX;
    for (let i = 0; i < dominoes.length; i++) {
        if (dominoes[i] === '.' && start) {
            forceR[i] = --count;
        } else if (dominoes[i] === 'R') {
            start = true;
            count = MAX;
        } else if (dominoes[i] === 'L') {
            count = MAX;
            start = false;
        }
    }
    for (let i = dominoes.length - 1; i >= 0; i--) {
        if (dominoes[i] === '.' && start) {
            forceL[i] = --count;
        } else if (dominoes[i] === 'L') {
            start = true;
            count = MAX;
        } else if (dominoes[i] === 'R') {
            count = MAX;
            start = false;
        }
    }
    // console.log(forceL, forceR);
    let sol = "";
    for (let i = 0; i < dominoes.length; i++) {
        if (forceL[i] === forceR[i]) {
            sol += dominoes[i];
        } else if (forceL[i] > forceR[i]) {
            sol += 'L';
        } else {
            sol += 'R';
        }
    }
    return sol;
};