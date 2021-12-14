function solve(str, idx) {
  if(str[idx] != '(') return -1
  for(let i=idx, count=0; i<str.length; ++i){  
    if(str[i] == '(') count++
    else if(str[i] == ')' ) count--;
    if(count==0) return i
  }
}


console.log(solve("((1)23(45))(aB)", 0));