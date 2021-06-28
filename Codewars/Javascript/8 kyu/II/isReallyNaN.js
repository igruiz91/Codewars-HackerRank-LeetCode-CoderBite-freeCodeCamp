const isReallyNaN = (val) => {
  return Number.isNaN(val) ? true : false;
};

const isReallyNaNUp = (val) => {
  return val != val
}

const isReallyNaNUp2 = (val) => Number.isNaN(val)

const isReallyNanUp3 = Number.isNaN


console.log(isReallyNanUp3('undefined'));
console.log(isReallyNanUp3(1));
console.log(isReallyNanUp3(NaN));