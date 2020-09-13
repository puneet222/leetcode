/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    asteroids.forEach(asteroid => {
        if(asteroid < 0) {
            let mag = Math.abs(asteroid);
            while(stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < mag) {
                stack.pop();
            }
            if(stack.length === 0 || stack[stack.length - 1] < 0) {
                stack.push(asteroid);
            } else if (stack[stack.length - 1] === mag) {
                stack.pop();
            }
        } else {
            stack.push(asteroid);
        }
    });
    return stack;
};