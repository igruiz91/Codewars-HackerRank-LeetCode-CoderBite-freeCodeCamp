function pattern(n){
  let output = [];
  for(let i = 0 ;i <n; i++){
    let pattern =""
    for(let j = 0; j<=i; j++){
      pattern+=n-j
    }
    output.push(pattern)
  }
  return output.join("\n");
}



const patternUp = (n) => {
  let resp = [],  pattern = ""
  for(let i = n; i > 0; i--){
    resp.push(pattern+=i)
  }
  return resp.join("\n")
}



console.log(patternUp(39));
