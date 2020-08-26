/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
    let minDeg = minutes * 6;
    let hrDeg = hour * 30 + minutes * 0.5;
    let angle = Math.abs(minDeg - hrDeg);
    return angle > 180 ? 360 - angle : angle;
};