# node-buffer-v6-shim

A shim for older versions of node &lt; v6 for methods such as `allow()`, `from()`, etc

Usage
-----

```
'use strict';

require('buffer-v6-polyfill');

// all your codez ...
```

Show me the Code
----------------

```javascript
'use strict';

if (!(Number(process.version.match(/^v(\d+\.\d+)/)[1]) >= 6.0)) {
  return;
}

function newBuffer(data, encoding, len) {
  return new Buffer(data, encoding, len);
}

function newSlowBuffer(data, encoding, len) {
  var SlowBuffer = require('buffer').SlowBuffer;
  return new SlowBuffer(data, encoding, len);
}

Buffer.alloc = newBuffer;
Buffer.allocUnsafe = newBuffer;
Buffer.allocUnsafeSlow = newSlowBuffer
Buffer.from = newBuffer;
```
