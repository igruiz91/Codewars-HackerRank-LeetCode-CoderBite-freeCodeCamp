function solve(n) {
  if(n%10!=0) return -1
  let resp =0, count=0;
  let money = [500, 200,100, 50, 20,10]
  while(n>0){
    if(n>=money[count]){
      n-=money[count]
      resp++
    }else count++
  }
  return resp
}

const solveUpTop = (n) => {
  if(n%10) return -1
  return [500, 200, 100, 50, 20, 10].reduce((r,v) => {
    let m = n/v | 0
    n%=v
    return r+m
  },0)
}

const solveUp = (n) => {
  let counter=0;
  [500, 200, 100, 50, 20, 10].map(b => {
    counter+= Math.floor(n/b)
    n=n%b
  })
  return n ? -1 : counter
}




console.log(solve(770));
console.log(solveUp(770));
console.log(solveUpTop(770));