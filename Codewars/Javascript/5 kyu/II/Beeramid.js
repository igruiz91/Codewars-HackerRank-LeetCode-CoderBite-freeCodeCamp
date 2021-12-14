var beeramid = function (bonus, price) {
  let i=0, n=0;
  while(true){
    i+=1
    if(bonus-i*i*price<0) return i-1
    bonus-=i*i*price
  }
};

var beeramidUp = function (bonus, price) {
  var i=1
  while(i*i*price<=bonus){
    bonus-=i*i*price; i++
  }
  return i-1
}




//console.log(sum(12))


console.log(beeramid(9,2));
console.log(beeramidUp(9,2));
console.log(beeramid(10,2));
console.log(beeramidUp(10,2));
//console.log(beeramid(1500,2));