function solve(str) {
  let resp = ''
  str_ = str.replace(/\ /g, '').split('').reverse()
  for(let i = 0; i<str.length;i++)
    str[i] === ' ' ? resp+=' ' : resp+=str_.shift()
  return resp
}

const solveUp = (str) => {
  let resp = ''
  for(let i=str.length-1; i>=0; i--){
    if(str[i] !== ' ') resp += str[i]
    if(str[resp.length] === ' ') resp+=' '
  }
  return resp
}



console.log(solve("your code rocks"));
console.log(solveUp("your code rocks"));