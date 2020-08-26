/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let bull = 0, cow = 0;
    let map = new Map();
    secret = secret.split("");
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bull++;
            secret[i] = '-';
        } else {
            if (map.get(secret[i])) {
                map.set(secret[i], map.get(secret[i]) + 1);
            } else {
                map.set(secret[i], 1);
            }
        }
    }
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] !== '-') {
            if (map.get(guess[i]) && map.get(guess[i]) > 0) {
                cow++;
                map.set(guess[i], map.get(guess[i]) - 1);
            }
        }
    }

    return bull + 'A' + cow + 'B';
};