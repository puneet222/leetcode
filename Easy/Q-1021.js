'use strict'
/**
 * @param {string} S
 * @return {string}
 */

var removeOuterParentheses = function (S) {
    let inner = 0;
    return S.split('').filter(ch => {
        if (ch === '(' && inner === 0) {
            inner++;
            return false;
        }
        if (ch === ')' && inner === 1) {
            inner--;
            return false;
        }
        if (ch === '(') {
            inner++;
            return true;
        }
        if (ch === ')') {
            inner--;
            return true;
        }
    }).join('');
};