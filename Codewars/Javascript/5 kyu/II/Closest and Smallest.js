function closest(str) {

  let strArr = str.split(" ")
  let numSum = strArr.map((nStr,  i) => [sumDigits(nStr), i, +nStr]);
  let sortedNums =  numSum.sort((a, b) => {
    if(a[0] !== b[0]) return a[0]-b[0];
    return a[1] - b[1];
  });
  let resp = [];
  for(let i = 1, min=Number.MAX_VALUE, sum=Number.MAX_VALUE; i < sortedNums.length; i++) {
    let differenceWeight = Math.abs(sortedNums[i][0] - sortedNums[i-1][0])
    let differenceNums = Math.abs(sumDigits(`${sortedNums[i - 1][2]}`) - sumDigits(`${sortedNums[i][2]}`))
    if (differenceWeight < min) {
      min = differenceWeight;
      sum = differenceNums;
      resp.push(sortedNums[i - 1], sortedNums[i]);
    } else if (differenceWeight == min) {
      if (differenceNums < sum) {
        sum = differenceNums;
        resp.push(sortedNums[i - 1], sortedNums[i]);
      }
    }
  }
  return resp.slice(-2)
}

const sumDigits = (num) => {
  return num.split("").reduce((a,b) => a + +b, 0)
}

console.log(closest("456899 50 11992 176 272293 163 389128 96 290193 85 52"));
// console.log(closest("123"));
