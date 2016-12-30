<!-- AD_TPL_BEGIN -->

About Daplie: We're taking back the Internet!
--------------

Down with Google, Apple, and Facebook!

We're re-decentralizing the web and making it read-write again - one home cloud system at a time.

Tired of serving the Empire? Come join the Rebel Alliance:

<a href="mailto:jobs@daplie.com">jobs@daplie.com</a> | [Invest in Daplie on Wefunder](https://daplie.com/invest/) | [Pre-order Cloud](https://daplie.com/preorder/), The World's First Home Server for Everyone

<!-- AD_TPL_END -->

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

if (Number(process.version.match(/^v(\d+\.\d+)/)[1]) >= 6.0) {
  return;
}

function newBuffer(data, encoding, len) {
  return new Buffer(data, encoding, len);
}

function newSlowBuffer(data, encoding, len) {
  var SlowBuffer = require('buffer').SlowBuffer;
  return new SlowBuffer(data, encoding, len);
}

if (!Buffer.alloc) {
  Buffer.alloc = newBuffer;
}
if (!Buffer.allocUnsafe) {
  Buffer.allocUnsafe = newBuffer;
}
if (!Buffer.allocUnsafeSlow) {
  Buffer.allocUnsafeSlow = newSlowBuffer;
}
if (!Buffer.from) {
  Buffer.from = newBuffer;
}

try {
  Buffer.from('1337', 'hex');
} catch(e) {
  // wish I could do something here to fix the broken Buffer.from
  try {
    Buffer.from = newBuffer;
  } catch(e) {
    // but alas, I cannot
    console.warn("Your node version has buggy Buffer.from support. Please update to node >= v4.5 or >= v6.3");
  }
}
```
