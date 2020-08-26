'use strict'

var RecentCounter = function () {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    if (this.queue.length === 0) {
        this.queue.push(t);
    } else {
        let first = this.queue[0];
        let diff = t - 3000;
        if (first >= diff) {
            this.queue.push(t);
        } else {
            while (this.queue.length > 0 && this.queue[0] < diff) {
                this.queue.shift();
            }
            this.queue.push(t);
        }
    }
    return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */