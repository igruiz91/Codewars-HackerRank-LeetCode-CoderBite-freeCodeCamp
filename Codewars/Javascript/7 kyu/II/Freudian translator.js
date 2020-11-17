function toFreud(string) {
  return string.split(' ').map(e => e = 'sex').join(' ');
}

const toFreudUp = (str) => {
  return str.replace(/\w+/g, 'sex')
}

const distanceBetweenPoints = (a, b) => Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)

console.log(toFreud("This is a test"));
console.log(toFreudUp("This is a test"));
