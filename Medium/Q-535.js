/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

let map = {};
let id = '0';

var encode = function (longUrl) {
    map[id] = longUrl;
    let sid = id;
    id++;
    return sid;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    return map[shortUrl]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */