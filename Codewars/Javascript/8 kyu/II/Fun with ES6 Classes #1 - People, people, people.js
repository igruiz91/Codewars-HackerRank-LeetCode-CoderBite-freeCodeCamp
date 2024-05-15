class Person {
  constructor(firstName="Jhon", lastName="Doe", age=0, gender="Male"){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  sayFullName() {
    return this.firstName+ " "+this.lastName
  }
  static greetExtraTerrestrials (race){
    return "Welcome to Planet Earth "+race
  }
}




let a = new Person()


console.log(a.firstName, a.lastName, a.age, a.gender)
console.log(a.sayFullName())
console.log(a.greetExtraTerrestrials("mars"))
