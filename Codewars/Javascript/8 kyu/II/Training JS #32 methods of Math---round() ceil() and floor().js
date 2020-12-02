function roundIt(n) {
  let [d,c] = `${n}`.split('.')
  return d.length> c.length ? Math.floor(n) : d.length<c.length ? Math.ceil(n) : Math.round(n)
}

//console.log(Math.ceil(34.0))


console.log(roundIt(3.45));
console.log(roundIt(34.5));