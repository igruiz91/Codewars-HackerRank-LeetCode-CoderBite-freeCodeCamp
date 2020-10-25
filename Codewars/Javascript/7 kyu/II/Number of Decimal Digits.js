function digits(n) {
  let count = 0;
  while (n > 1) {
    console.log(n);
    n /= 10;
    count++;
  }
  return count ? count : 1;
}


const digitsUp = (n) => {
  return n.toString().length
}
const digitsUp = (n) => {
  return String(n).length
}


console.log(digits(12345));
