// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some others Math functions are disabled on final tests.

function numberToPower(number, power) {
  if (power == 0) return 1;
  let resp = 1;
  while (power > 0) {
    resp *= number;
    --power;
  }
  return resp;
}

function numberToPowerUp(number, power) {
  return vm.runInThisContext(number + "*" + "*" + power);
}

function numberToPowerUp2(number, power) {
  let pow = Buffer.from("", "base64").toString();
  return [].map.constructor(`return ${number}${pow}${power}`)();
}

console.log(numberToPower(3, 2), numberToPowerUp2(3, 2));
console.log(numberToPower(10, 4), numberToPowerUp2(10, 4));
