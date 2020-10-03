/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    if(num_people === 1) {
        return [candies];
    }
    let i = 0, count = 0;
    let arr = new Array(num_people).fill(0);
    let sum = getSum(num_people);
    let distributed = i*Math.pow(num_people,2) + sum;
    while(distributed < candies) {
        candies -= distributed;
        i++;
        distributed = i*Math.pow(num_people,2) + sum;
    }
    let idx = 0;
    while(idx < arr.length && candies > 0) {
        let candy = i*num_people + (idx + 1);
        if(candy <= candies) {
            candies -= candy;
            arr[idx] += candy;
        } else {
            arr[idx] += candies;
            candies = 0;

        }
        idx++;
    }
    let pre = getSum(i-1);
    idx = 0;
    while(idx < arr.length) {
        let candy = pre * num_people + i*(idx+1);
        arr[idx] += candy;
        idx++;
    }
    return arr;
};

var getSum = function(n) {
   return Math.floor((n*(n+1))/2);
}