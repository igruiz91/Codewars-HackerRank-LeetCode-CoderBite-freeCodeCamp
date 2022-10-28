function alternate(n, firstValue, secondValue) {
  return Array(n).fill().map((x,i) => i%2==0 ? firstValue : secondValue)
}


function alternateUp(n, firstValue, secondValue) {
  return Array.from({length: n}, (_,i) => i%2 ? secondValue :firstValue )
}
console.log(alternate(5, true, false));
console.log(alternateUp(5, true, false));
