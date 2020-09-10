/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.queue = new Array(k);
    this.front = 0;
    this.rear = 0;
    this.empty = true;
    this.full = false;
    this.size = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (!this.full) {
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.size;
        if (this.rear === this.front) {
            this.full = true;
        }
        this.empty = false;
        return true;
    }
    return false;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (!this.empty) {
        let element = this.queue[this.front];
        this.front = (this.front + 1) % this.size;
        if (this.front === this.rear) {
            this.empty = true;
        }
        this.full = false;
        return true;
    }
    return false;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (!this.empty) {
        return this.queue[this.front];
    }
    return -1;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (!this.empty) {
        let rIdx = this.rear - 1;
        rIdx = rIdx === -1 ? this.size - 1 : rIdx;
        return this.queue[rIdx];
    }
    return -1;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.empty;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.full;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */