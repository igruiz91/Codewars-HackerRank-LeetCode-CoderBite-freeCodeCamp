var maximum69Number = function (num) {
  let numToStr=``+num
  let idx = numToStr.indexOf("6");
  if(idx==-1) return num
  return Number(numToStr.substring(0, idx) + "9" + numToStr.substring(idx + 1));
};

const maximum69NumberUp = (num) => {
  return Number((``+num).replace('6','9'))
}

console.log(maximum69Number(9669));
console.log(maximum69NumberUp(9669));
