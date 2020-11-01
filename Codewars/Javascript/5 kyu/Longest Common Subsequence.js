function LCSTry(x, y) {
  let cons = []
  let min = Math.min(x.length, y.length)
  let max = Math.max(x.length, y.length);
  min == x.length ? min = x : min = y
  max == y.length ? max = y : max = x
  let consecutive = min[0]
  for(let i = 0; i< min.length-1 ; i++){
    if(min[i+1].charCodeAt(0) == min[i].charCodeAt(0)+1){
      consecutive+=min[i+1]
    }else{
      cons.push(consecutive)
      consecutive=''
    }
    cons.push(consecutive)
  }
  cons = cons.sort((a, b) => b.length - a.length);
  for(let x of cons){
    if(max.includes(x)) return x
  }
  return '';
}


const LCS = (x,y) => {
  let str = ''
  let n =0
  for(let i =0; i<y.length; i++){
    for(let j = n; j<x.length; j++){
      if(x[j] == y[i]){
        str+=y[i]
        n= ++j
        break
      }
    }
  }
  return str
}

const LCSUp = (x,y) => {
  let yChar = y.split('')
  let start = 0, resp =''
  for(let i=0; i<yChar.length; i++){
    let pos = x.indexOf(yChar[i], start)
    if(pos>=start){
      resp += yChar[i]
      start = pos+1
    }
  }
  return resp
}



console.log(LCS("abcdef", "abc"));
console.log(LCSUp("axsfbercdef", "abc"));
