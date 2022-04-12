function Bird() {
  let weight = 15;

  this.getWeight = function(){
    return weight;
  }
}


let birdie = new Bird()
console.log(birdie.getWeight());
