/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
    text = replace(text, "&quot;", "\"\n");
    text = replace(text, "&apos;", "'\n");
    text = replace(text, "&amp;", "&\n");
    text = replace(text, "&gt;", ">\n");
    text = replace(text, "&lt;", "<\n");
    text = replace(text, "&frasl;", "/\n");
    return text.split("\n").join("");
};

var replace = function (str, entity, val) {
    return str.split(entity).join(val);
}