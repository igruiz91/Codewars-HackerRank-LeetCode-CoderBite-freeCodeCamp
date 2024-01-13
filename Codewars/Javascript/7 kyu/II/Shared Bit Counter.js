function sharedBits(a, b) {
  let binA = a.toString(2).padStart(16, "0").split('')
  let binB = b.toString(2).padStart(16, "0").split('')
  return binA.filter((b,i) => binB[i] == "1" && binA[i] == "1").length>1
}


const sharedBitsUp = (a,b) => {
  return a&b & (a&b)-1 ? true : false
 



console.log(sharedBits(3072, 1536));
console.log(sharedBitsUp(3072, 1536));
// console.log(sharedBits(1,2))
// console.log(sharedBits(16,8))
// console.log(sharedBits(43,77))
