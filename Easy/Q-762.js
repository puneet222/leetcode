/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
    let count = 0;
    for (let i = L; i <= R; i++) {
        let bin = i.toString(2);
        let ones = 0;
        [...bin].forEach(bit => {
            if (bit === '1') ones++;
        });
        if (ones === 1) continue;
        if (checkPrime(ones)) {
            count++;
        }
    }
    return count;
};

var checkPrime = function (num) {
    let isPrime = true;
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}