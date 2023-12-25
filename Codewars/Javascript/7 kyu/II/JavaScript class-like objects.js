class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

let dog = new Animal("max", "dog");

console.log(dog.name);
console.log(dog.type);
console.log(dog.toString());
dog.name = "max2";
console.log(dog.name);
