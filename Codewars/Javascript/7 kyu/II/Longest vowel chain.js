function solve(s) {
  return Math.max(...s.match(/[aeiou]+/gi).map(c => c.length))
}

const solveClassic = (s) => {
  let max=0, count=0;
  for(let i=0; i<s.length; i++){
    if("aeiou".includes(s[i])){
      count++
      if(max<count) max=count
    }else{
      count=0
    }
  }
  return max
}

const solveUp = (s) => {
  return s.split(/[^aeiou]/).reduce((s,n) => Math.max(s, n.length) ,0)
}


//console.log(solve('codewarriiors'));
console.log(solve("iiihoovaeaaaoougjyaw"));
console.log(solveUp("iiihoovaeaaaoougjyaw"));
console.log(solveClassic("iiihoovaeaaaoougjyaw"));
