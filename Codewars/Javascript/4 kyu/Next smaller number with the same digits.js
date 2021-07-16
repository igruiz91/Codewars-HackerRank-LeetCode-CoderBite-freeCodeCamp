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


const nextSmallerNew = n => {
    let num = `${n}`.split('')
    let contador = 0, pos = num.length - 2
    while (num[num.length - 1] > num[pos]) {
        contador++
        pos--
    }
    [num[num.length - 1], num[pos]] = [num[pos], num[num.length - 1]]
    return Number(num.slice(0, pos).concat(num.slice(-(num.length - pos - 1)).sort((a, b) => b - a)).join(''))
}
//6215484505231
//6215484505213
//621548450523

//console.log(nextSmaller(21)); //12
//console.log(nextSmaller(1207));
console.log(nextSmaller(1027));
//console.log(nextSmaller(1234567908)); //1234567890
