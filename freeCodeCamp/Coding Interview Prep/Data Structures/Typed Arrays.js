var byteSize = 64; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int32Array(buffer);

console.log(i8View);
