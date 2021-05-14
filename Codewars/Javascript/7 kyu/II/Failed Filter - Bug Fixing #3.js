var FilterNumbers = function(str) {
  return str.split('').filter(c => !Number(c)).join('').split('0').join('')
}

const FilterNumbersUp = (str) => {
  return str.replace(/\d+/gi, '')
};

const FilterNumbersUp2 = (str) => {
  return str
    .split("")
    .filter((c) => isNaN(c))
    .join("");
};



console.log(FilterNumbersUp("bcee00fcbdba"));
console.log(FilterNumbersUp2("a1b2c3"));