function twoDecimalPlaces(number) {
  return number > 0
    ? Math.floor(number * 100) / 100
    : Math.ceil(number * 100) / 100;
}


const twoDecimalPlacesUp = (n) => {
  return Math.trunc(n*100)/100
}

const twoDecimalPlacesUp2 = (n) => {
  return +n.toFixed(4).slice(0,-2)
}

const twoDecimalPlacesUp3 = (n) => {
  return parseInt(n*100)/100
};

const twoDecimalPlacesUp4 = (n) => ~~(n*100)/100;




console.log(twoDecimalPlaces(10.1289767789));
console.log(twoDecimalPlacesUp(10.1289767789));
console.log(twoDecimalPlacesUp2(10.1289767789));
console.log(twoDecimalPlacesUp3(10.1289767789));
console.log(twoDecimalPlacesUp4(10.1289767789));