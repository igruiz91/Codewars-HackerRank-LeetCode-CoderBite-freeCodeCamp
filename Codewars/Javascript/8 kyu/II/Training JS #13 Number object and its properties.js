function whatNumberIsIt(n) {
  switch (n) {
    case 1.7976931348623157e308:
      return "Input number is Number.MAX_VALUE";
    case 5e-324:
      return "Input number is Number.MIN_VALUE";
    case -Infinity:
      return "Input number is Number.NEGATIVE_INFINITY";
    case Infinity :
      return "Input number is Number.POSITIVE_INFINITY";
    case Number(n):
      return "Input number is "+n
    default: return "Input number is Number.NaN"
  }
}

function whatNumberIsItUp(n) {
  switch (true) {
    case n == Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
    case n == Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
    case n == Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
    case n == Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
    case isNaN(n):
      return "Input number is Number.NaN";
    default:
      return "Input number is " + n;
  }
}


function whatNumberIsIt2(n) {
  const CHOICES = Object.getOwnPropertyNames(Number);
  let choice = CHOICES.filter((a) => n === Number[a]).join("");
  return `Input number is ${
    choice ? `Number.${choice}` : isNaN(n) ? "Number.NaN" : n
  }`;
}




// console.log(whatNumberIsIt(1.7976931348623157e308));
// console.log(whatNumberIsIt(1/0));
console.log(whatNumberIsIt2(Infinity));
console.log(whatNumberIsIt2(NaN));
console.log(whatNumberIsIt2(10));