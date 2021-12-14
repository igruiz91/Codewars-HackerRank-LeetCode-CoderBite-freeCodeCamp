function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}


const createFunctionsUp = (n) => Array.from(Array(n), (_,i) => () => i);



var a = createFunctionsUp(5)

console.log(a[2]())