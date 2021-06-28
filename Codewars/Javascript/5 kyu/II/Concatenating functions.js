// just a small amount of possible functions to start testing with.
var addOne = function (e) {
  return e + 1;
};
var square = function (e) {
  return e * e;
};

// Extend the Function prototype with a method pipe
Function.prototype.pipe = function(e){
  let adding = this;
  return function (f) {
    return e(adding(f));
  }
}

Function.prototype.pipeUp = function(fn){
  return (...args) => fn(this(...args))
}

Function.prototype.pipeUp2 = function(fn){
  return function (a) {
    return fn(this(a))
  }.bind(this)
};

var result = [1, 2, 3, 4, 5].map(addOne.pipeUp2(square));
console.log(result)