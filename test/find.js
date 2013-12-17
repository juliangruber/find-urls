var assert = require('assert');
var find = require('find-urls');

describe('find(text)', function() {
  it('should handle no urls', function() {
    assert(find('').length === 0);
  });
  
  it('should find one url', function() {
    var urls = find('http://google.com/');
    assert(urls.length === 1);
    assert(urls[0] == 'http://google.com/');
  });
  
  it('should find two urls', function() {
    var urls = find('http://google.com/ and http://segment.io/');
    assert(urls.length === 2);
    assert(urls[0] == 'http://google.com/');
    assert(urls[1] == 'http://segment.io/');
  });
  
  it('should ignore dots after urls', function() {
    var urls = find('http://google.com/.');
    assert(urls.length === 1);
    assert(urls[0] == 'http://google.com/');
  });
  
  it('should ignore duplicates', function() {
    var urls = find('http://google.com/ and http://google.com/');
    assert(urls.length === 1);
    assert(urls[0] == 'http://google.com/');
  });
});
