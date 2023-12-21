function Mormons(startingNumber, reach, target) {
  let missions= 0
   while(startingNumber<target){
    startingNumber+=startingNumber*reach
    missions++
   }
   return missions
}

const MormonsUp = (startNum, reach, target) => {
  if(startNum>=target) return 0
  return 1+MormonsUp(startNum+startNum*reach, reach, target)
 }

console.log(Mormons(10, 3,9))
console.log(Mormons(40, 2,120))
console.log(Mormons(20000, 2,7000000000))
// -----------------------------
console.log(MormonsUp(10, 3,9))
console.log(MormonsUp(40, 2,120))
console.log(MormonsUp(20000, 2,7000000000))
