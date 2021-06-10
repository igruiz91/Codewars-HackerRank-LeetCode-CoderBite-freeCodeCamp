function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let p in beagle) {
  if (beagle.hasOwnProperty(p)) ownProps.push(p);
  else prototypeProps.push(p);
}

console.log(ownProps);
console.log(prototypeProps);
