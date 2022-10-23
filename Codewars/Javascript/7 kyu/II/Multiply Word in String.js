function modifyMultiply(str, loc, num) {
  return (str.split(' ')[loc]+'-').repeat(num).slice(0,-1)
}


const modifyMultiplyUp = (str, i, n) => { 
  return Array(n).fill(str.split(' ')[i]).join('-')
 }

console.log(modifyMultiply("This is a string", 3, 5));
console.log(modifyMultiplyUp("This is a string", 3, 5));
