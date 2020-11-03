function redAlert(n) {
  while (n>1024) {
    n /= 1024;
  }
  console.log(n);
  return "0"+(Math.ceil(n/4).toString(16)).slice(-2)+"0000"
}


//console.log(redAlert(9));
console.log(redAlert(2048));

