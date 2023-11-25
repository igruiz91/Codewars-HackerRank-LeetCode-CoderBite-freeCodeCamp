function secondSymbol(s, symbol) {
  for(let i=0, count = 0; i<s.length; i++) {
    if(s[i] === symbol) count++
    if(count === 2) return i
  }
  return -1
}

const secondSymbolUp = (s, symbol) => {
  return s.indexOf(symbol, s.indexOf(symbol)+1)
}

console.log(secondSymbol("Hello world!!!", "l"));
console.log(secondSymbolUp("Hello world!!!", "l"));
