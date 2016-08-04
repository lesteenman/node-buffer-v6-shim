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

Buffer.alloc = newBuffer;
Buffer.allocUnsafe = newBuffer;
Buffer.allocUnsafeSlow = newSlowBuffer
Buffer.from = newBuffer;
