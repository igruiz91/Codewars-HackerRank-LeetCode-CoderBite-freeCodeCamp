function nextSmaller(n) {
  let arrNum=`${n}`.split('').map(n => Number(n))
  for(let i = arrNum.length - 2; i>=0;i--){
    let bigger = -1, index = 0
    for (let j = i + 1; j < arrNum.length; j++) {
      if (arrNum[j] < arrNum[i] && arrNum[j] > bigger) {
        bigger = arrNum[j];
        index = j;
      }
    }
    if(bigger>=0){
      let temp = 0
      temp = arrNum[i]
      arrNum[i]= bigger
      arrNum[index]=temp
      let arrSort = arrNum.slice(i+1).sort((a,b) => b-a)
      let resp = arrNum.slice(0, i + 1).concat(arrSort)
      return resp[0] ==  0 ? -1 : Number(resp.join(''));
    }
  }
  return -1
}


const nextSmallerUp = n => {
    let digits = (''+n).split('')
    for(let i=digits.length-1; i-- >0;){
      if(digits[i+1]<digits[i]){
        var tail = digits.slice(i).sort((a,b) => b-a);
        var head = tail.splice(tail.findIndex(x => x<digits[i]), 1);
        if(!i && '0' == head[0]) return -1
        return +digits.slice(0, i).concat(head, tail).join("");
      }
    }
    return -1
}
//6215484505231
//6215484505213
//621548450523

//console.log(nextSmaller(21)); //12
//console.log(nextSmaller(1207));
//console.log(nextSmaller(1027));
console.log(nextSmallerUp(1027));
console.log(nextSmallerUp(1234567908)); //1234567890
