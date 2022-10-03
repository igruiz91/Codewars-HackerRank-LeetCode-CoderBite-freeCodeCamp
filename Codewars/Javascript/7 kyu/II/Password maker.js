function makePassword(phrase) {
  return phrase.split(' ').map(w => {
    let c = w.slice(0, 1);
    let t = c.toLowerCase()
    return t=='o' ? 0 : t=='i' ? 1 : t== 's' ? 5 : c
  }).join('')
}

const makePasswordUp = (p) => {
  return p.split(' ').map(w => w[0]).join('').replace(/[iso]/gi, (c) => ({i:1, s:5, o:0})[c.toLowerCase()])
}

console.log(makePassword("Give me liberty or give me death"));
console.log(makePasswordUp("Give me liberty or give me death"));
