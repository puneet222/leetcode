/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
    this.times = times;
    this.leading = new Map();

    let votes = new Map();
    let leadCandidate = null;
    let leadVotes = 0;

    for (let i = 0; i < persons.length; i++) {
        if (votes.has(persons[i])) {
            votes.set(persons[i], votes.get(persons[i]) + 1);
        } else {
            votes.set(persons[i], 1);
        }
        let currentVotes = votes.get(persons[i]);
        if (currentVotes >= leadVotes) {
            leadCandidate = persons[i];
            leadVotes = currentVotes;
        }
        this.leading.set(this.times[i], leadCandidate);
    }
    console.log(this.leading);
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
    let i = 0, j = this.times.length - 1;
    let index = -1;
    if (t >= this.times[j]) {
        index = j;
    } else {
        while (i <= j) {
            let mid = Math.floor((i + j) / 2);
            if (this.times[mid] === t) {
                index = mid;
                break;
            }
            if (this.times[mid] < t) {
                i = mid + 1;
            } else {
                if (this.times[mid - 1] <= t) {
                    index = mid - 1;
                    break;
                } else {
                    j = mid - 1;
                }
            }
        }
    }
    return this.leading.get(this.times[index]);
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */