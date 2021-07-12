function greatestCommonFactor(array) {
  let n = Math.min(...array)
  while(!commonFactor(array,n) && n>0)n--;
  return n;
}

const commonFactor = (arr,n) => arr.filter(e => e%n==0).length === arr.length

const greatestCommonFactorUp  = (arr) => {
  const gcf = (a,b) => !b ? a : gcf(b, a%b) 
  return arr.reduce(gcf)
};



let arr = [46, 14, 20, 88];

//console.log(commonFactor(arr,2))

console.log(greatestCommonFactor(arr));
console.log(greatestCommonFactorUp(arr));