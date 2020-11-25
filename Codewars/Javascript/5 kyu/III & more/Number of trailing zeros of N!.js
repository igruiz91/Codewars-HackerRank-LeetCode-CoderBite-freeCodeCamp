function zeros(n) {
  let fact = 1;
  while (n > 1) {
    fact = fact * n;
    n--;
  }
  return fact;
}

const stirling = (n) => {
  return Math.ceil(
    Math.sqrt((2 * n + 1 / 3) * Math.PI) * Math.pow(n, n) * Math.pow(Math.E, -n)
  );
};

const automedon = (n) => {
    let zeros = 0
    while(n>0){
        n=Math.floor(n/5)
        console.log(n);
        zeros += n;
    }
    return zeros;
}

console.log(automedon(100));
console.log(stirling(6));
