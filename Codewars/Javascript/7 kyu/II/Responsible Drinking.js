function hydrate(s) {
  let n = s.match(/\d/g);
  let sum = n.reduce((acc, curr) => +curr + acc, 0);
  return sum > 1 ? sum + " glasses of water" : "1 glass of water";
}

const hydrateUp = (s, sum=0) => {
  sum = s.match(/\d+/g).reduce((x,y) => x+ +y ,0)
  return sum + ` glass${sum > 1 ? "es" : ""} of water`;
}

const hydrateUpTest = (s) => {
  let x = [...s].filter(n => !isNaN(n)).reduce((sum, n) => sum + +n ,0)
  return `${x} glass${x > 1 ? "es" : ""} of water`;
}


console.log(hydrate("1 shot"));
console.log(hydrateUp("1 shot, 5 beers and 1 glass of wine"));
console.log(hydrateUpTest("1 shot, 5 beers and 1 glass of wine"));
console.log(hydrateUpTest("1 shot"));