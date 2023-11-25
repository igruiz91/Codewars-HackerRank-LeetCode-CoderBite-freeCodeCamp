function howMuchWater(water, load, clothes) {
  return  Math.round((water*1.1**(clothes-load))*100)/100
}



console.log(howMuchWater(10,10,21))
console.log(howMuchWater(10,11,20))

