function Dog(name, breed, sex, age) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
  this.age = age;
}

Dog.prototype.bark = () =>{
  return "Woof!"
}

var apollo = new Dog('Apollo', 'Dobermann', 'male', '4');

console.log(apollo.bark())
