
# find-urls

  Find all urls in a text

## Example

```js
var find = require('find-urls');

var urls = find('Some http://google.com/ and http://segment.io.');
// => ['http://google.com/', 'http://segment.io']
```

## Installation

  Install with [component(1)](http://component.io):

    $ component install juliangruber/find-urls

## API

### find(text)

  Return an array of urls inside `text`.
  
  Duplicates are removed and urls that end with punctuation are cleaned up.

## License

  MIT
