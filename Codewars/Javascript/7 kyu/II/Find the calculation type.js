function calcType(a, b, res) {
  let dict = {
    "addition": (a, b) => a + b,
    "subtraction": (a, b) => a - b,
    "multiplication" : (a, b) => a * b,
    "division": (a, b) => a / b,
  };
  for(let [k,v] of Object.entries(dict)){
    if(v(a,b) === res) return k
  }
}

const calcTypeUp = (a,b,res) => {
  return { [a + b]: "addition", [a - b]: "subtraction", [a*b]: "multiplication", [a/b]: "division" }[res];
 }

console.log(calcType(1,2,3))
console.log(calcTypeUp(1, 2, 3));
