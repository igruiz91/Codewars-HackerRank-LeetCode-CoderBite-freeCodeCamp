function spread(func, args) {
  return func(...args);
}


const someFunction = () => {
  return arguments.length
 }

console.log(spread(someFunction, [1, true, "Foo", "bar"]));
