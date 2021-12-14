function whatCentury(year) {
  let century = parseInt(year/100)+1
  let lastDigit = Number(century.toString().slice(-1));
  let terminations = {1:'st', 2:'nd', 3:'rd'}
  return `${century}` + (terminations[lastDigit] ? terminations[lastDigit] : 'th')
}



console.log(whatCentury("1999"));

//console.log(DataOggi());
