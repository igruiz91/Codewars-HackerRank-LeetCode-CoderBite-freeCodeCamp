function capMe(names) {
  return names.map(w => w.toLowerCase().replace(/^\w/, c => c.toUpperCase()))
}

const capMeUp = (names) => {
  return names.map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
 }

console.log(capMe(["KARLY", "DANIEL", "KELSEY"]));
console.log(capMeUp(["KARLY", "DANIEL", "KELSEY"]));
