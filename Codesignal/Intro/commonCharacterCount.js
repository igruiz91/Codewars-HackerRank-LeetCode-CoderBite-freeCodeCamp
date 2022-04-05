function solution2(s1, s2) {
  let resp=0
  let exp = new Set(  )
  const makeExp = (str) => str.match(/(.)\1+|\w/g).map(e => exp.add(e))
  makeExp(s1); makeExp(s2)
  for(let e of exp)
    if(s1.includes(e) && s2.includes(e)) resp++

  return resp
}


function solution(s1,s2) {
  for(var i = 0, resp = 0;i<s1.length; i++){
    if(s2.includes(s1[i])){
      let index=s2.indexOf(s1[i]);
      resp++
      s2=s2.slice(0,index)+s2.slice(index+1)
    }
  } 
  return resp
}

function solutionTop(s1,s2){
  for(let i=0; i<s1.length;i++)
    if(s2.includes(s1[i])) s2=s2.replace(s1[i],'!')
  return s2.replace(/[^!]/g,"").length
}



console.log(solution("aabcc", "adcaa"));
console.log(solution("zzzz", "zzzzzzz"));
console.log(solutionTop("aabcc", "adcaa"));
console.log(solutionTop("zzzz", "zzzzzzz"));
