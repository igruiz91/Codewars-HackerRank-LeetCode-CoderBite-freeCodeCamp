const broken = (x) => [...x].map((n) => (n == "1" ? "0" : "1")).join("");

const brokenUp = (x) => {
  return x.replace(/\d/g, val => val^1)
}


console.log(broken("10000000101101111110011001000"));
console.log(brokenUp("10000000101101111110011001000"));
