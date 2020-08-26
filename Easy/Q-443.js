/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let current = chars[0];
    let cindex = 0;
    let count = 1;
    let len = chars.length;
    for (let i = 1; i < len; i++) {
        if (chars[i] === current) {
            count++;
        } else {
            if (count > 0) {
                chars.push(current);
                if (count > 1) {
                    count = count.toString().split('').forEach(digit => chars.push(digit));
                }
                current = chars[i];
                cindex = i;
                count = 1;
            }
        }
    }
    chars.push(current);
    if (count > 1) {
        count = count.toString().split('').forEach(digit => chars.push(digit));
    }
    chars.splice(0, len);
    return chars.length;
};