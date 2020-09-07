/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
    // let dp = new Array(N+1);
    // dp[1] = false;
    // dp[2] = true;
    // for(let i = 3; i <= N; i++) {
    //     let op = true;
    //     for(let j = 1; j <= Math.floor(i/2); j++) {
    //         if(i % j === 0) {
    //             op = op && dp[i-j];
    //         }
    //     }
    //     if(op) {
    //         dp[i] = false;
    //     } else {
    //         dp[i] = true;
    //     }
    // }
    // return dp[N];

    /** WITH CLOSE OBSERVATION  **/
    return N % 2 === 0;
};