function crap(x, bags, cap) {
  let dog =false
  let count = x
    .map((arr) => arr.filter((c) => {
      if(c==='D') dog=true
      return c == "@"
    }).length)
    .reduce((a, b) => a + b, 0);
  return dog ? 'Dog!!' : count > bags*cap ? 'Cr@p' : 'Clean'
}
let test1= [['_','_','_','_'], ['D','_','_','@'], ['_','_','@', '_']]
console.log(crap(test1, 2, 2))
