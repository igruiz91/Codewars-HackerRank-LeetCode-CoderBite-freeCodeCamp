function looseChange(cents) {
  let lib = { "Nickels": 0, "Pennies": 0, "Dimes": 0, "Quarters": 0 }
  cents= Math.floor(cents)
  while (cents > 0) {
    if (cents >= 25) {
      cents -= 25;
      lib.Quarters++;
    } else if (cents >= 10) {
      cents -= 10;
      lib.Dimes++;
    } else if (cents >= 5) {
      cents -= 5;
      lib.Nickels++;
    } else {
      cents--;
      lib.Pennies++;
    }
  }
  return lib;
}

const looseChangeUp = (cents) => {
  var lib = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  if(cents<=0) return lib
  lib.Quarters = Math.floor(cents/25)
  lib.Dimes = Math.floor(cents%25/10)
  lib.Nickels = Math.floor(cents%25%10/5)
  lib.Pennies = Math.floor(cents%25%10%5)
  return lib
}


console.log(looseChange(56))
console.log(looseChangeUp(56))
console.log(looseChange(7.9))
console.log(looseChangeUp(7.9))
