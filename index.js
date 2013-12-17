var isUrl = require('regexps').url;

/**
 * Find all urls in `text`.
 *
 * @param {String} text
 * @return {Array}
 * @api pubilc
 */

module.exports = function(text) {
  return text
    .split(/\s/)
    .filter(function(word) {
      return isUrl.test(word);
    })
    .map(function(url) {
      while (/\.$/.test(url)) {
        url = url.slice(0, -1);
      }
      return url;
    })
    .filter(function(url, i, urls) {
      return urls.indexOf(url) == i;
    });
};
