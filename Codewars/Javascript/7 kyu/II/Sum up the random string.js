function sumFromString(str) {
  let nums = str.match(/\d+/g)
  return nums ? nums.reduce((a,b) => a+(+b),0) : 0
}

const sumFromStringUp = (str) => {
  return (str.match(/\d+/g) || []).reduce((a,b) => a+ +b,0)
 }

console.log(sumFromString("a 2015 a 6+"))
console.log(sumFromStringUp("a 2015 a 6+"))
