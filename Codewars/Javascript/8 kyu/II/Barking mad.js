function Dog(breed) {
  this.breed = breed;
}

Dog.prototype.bark = function(){
  return "Woolf"
}

class DogUp {
  constructor(breed){
    this.breed= breed
  }
  bark(){
    return "Woof"
  }
}

function DogUp2(breed) {
  this.breed=breed;
  this.bark=function(){return "Woof"}
}


var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");

console.log(scoobydoo.bark());
