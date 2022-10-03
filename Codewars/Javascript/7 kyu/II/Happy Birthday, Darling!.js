function womensAge(n) {
  let resp = n % 2==0 ? `20, in base ${n / 2}` : `21, in base ${(n - 1) / 2}`;
  return `${n}? That's just ${resp}!`
}


const womensAgeUp = (n) => {
  return `${n}? That's just ${20+n%2}, in base ${Math.floor(n/2)}!`;
}

console.log(womensAge(32))
console.log(womensAgeUp(32));
console.log(womensAge(39))
console.log(womensAgeUp(39));
