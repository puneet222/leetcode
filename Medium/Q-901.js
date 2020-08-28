
var StockSpanner = function () {
    this.stack = [];
    this.span = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let count = 1;
    if (this.stack.length > 0) {
        while (this.stack.length > 0 && this.stack[this.stack.length - 1] <= price) {
            this.stack.pop();
            count += this.span.pop();
        }
    }
    this.stack.push(price);
    this.span.push(count);

    return this.span[this.span.length - 1];
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */