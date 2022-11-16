var guess = function (n) {
  resp = 2
  return n == resp ? 0 : n >resp ? -1 : 1
}

var guessNumber = function (n) {
  let min=1, max = n
  const mid = (min, max) => { return Math.floor((min + max) / 2) }
  let x = mid(min, max)
  while(guess(x)!=0) {
    if(guess(x) == 1){
      min =mid(min, max)+1
    }
    else{
      max = mid(min, max)-1;
    }
    x = mid(min, max)
  }
  return x
};



console.log(guessNumber(2));
//console.log(guessNumber(10));
