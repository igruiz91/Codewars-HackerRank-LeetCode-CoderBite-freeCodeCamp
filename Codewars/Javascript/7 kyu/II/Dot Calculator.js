function dotCalculator(equation) {
  let resp = 0
  let n = equation.split(' ').map(x => x.includes('.') ? x.length : x)
  let op = n.splice(1,1)
  if(op=='+')  resp = n[0]+n[1]
  if(op=='-')  resp = n[0]-n[1]
  if(op=='*')  resp = n[0]*n[1]
  if(op=='//')  resp = n[0]/n[1]
  return '.'.repeat(resp)
}


const dotCalculatorUp = (eq) => {
  const operations = {'+' : (a,b) => a+b,'-' : (a,b) => a-b,'*' : (a,b) => a*b,'//' : (a,b) => a/b}
  const [a,s,b] = eq.split(' ')
  return '.'.repeat(operations[s](a.length,b.length))
}

console.log(dotCalculator("..... + ...............")); // ....................
console.log(dotCalculatorUp("..... + ...............")); // ....................
console.log(dotCalculator(". // .."));
