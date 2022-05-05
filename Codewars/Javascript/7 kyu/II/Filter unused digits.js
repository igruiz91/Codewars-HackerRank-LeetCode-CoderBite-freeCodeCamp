function unusedDigits(...args) {
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  args
    .join("")
    .split("")
    .map((d) =>
      digits.indexOf(+d) != -1 ? digits.splice(digits.indexOf(+d), 1) : null
    );
  return digits.join('');
}

const unusedDigitsUp = (...args) => {
  return "0123456789".replace(new RegExp("["+args.join("")+"]", "g"), "");
}


const unusedDigitsUp2 = (...args) => {
  let nums = args.join('')
  return [0,1,2,3,4,5,6,7,8,9].filter(n => !nums.includes(n)).join('')
};

console.log(unusedDigits(12, 34, 56, 78));
console.log(unusedDigitsUp2(12, 34, 56, 78));
console.log(unusedDigits(2015, 8, 26));
console.log(unusedDigitsUp2(2015, 8, 26));
