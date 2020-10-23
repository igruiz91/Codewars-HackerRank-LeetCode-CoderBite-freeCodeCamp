Go = function (n) {
  return n-5>5?Go(n-5):n%5+1;
};






Go=n=>n-5>5?Go(n-5):n%5+1

Go=n=>n%5+1

console.log(Go(5));