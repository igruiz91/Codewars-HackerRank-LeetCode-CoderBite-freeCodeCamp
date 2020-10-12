class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

class PersonUp {
  constructor(name, age){
    this.name =name;
    this.age =age;
  }
  get info(){
    return this.getInfo()
  }
  getInfo(){
    return `${this.name}s age is ${this.age}`
  }
}

var a = new PersonUp('jon', 43)
console.log(a.info);
