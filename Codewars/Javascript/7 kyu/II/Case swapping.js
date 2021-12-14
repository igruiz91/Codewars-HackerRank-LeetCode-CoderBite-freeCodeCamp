function swap(str) {
  return str.split('').map(l => l.toUpperCase()== l ? l.toLowerCase() : l.toUpperCase()).join('')
}



console.log(swap("CodeWars"));