/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let i = 0, j = 0;
    let sol = true;
    while (i <= j && j < typed.length) {
        if (name[i] === typed[j]) {
            i++;
            j++;
        } else {
            if (j > 0 && typed[j - 1] === typed[j]) {
                // must have a long press
                j++;
            } else {
                sol = false;
                break;
            }
        }
    }
    if (i < name.length) {
        sol = false;
    }
    return sol;
};