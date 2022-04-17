function Stack() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.push = function (e){
    return [...collection, e];
  }
  this.pop = function () {
    let e = collection[collection.length - 1];
    collection = collection.slice(0, collection.length - 1);
    return e
  };
   this.peek = function () {
     return collection[collection.length - 1];
   };
   this.isEmpty = function () {
     return collection.length === 0
   };
   this.clear = function () {
     return collection.length = 0
   };
}


var stack = new Stack();
stack.push("CS50");
console.log(stack.print());
