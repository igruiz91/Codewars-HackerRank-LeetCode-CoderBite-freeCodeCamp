function amIWilson(p) {
  return (fac(p-1)+1)/(p*p) %1 === 0
}


const fac = (p) => {
  let resp = 1
  while(p>1) resp *=p--
  return resp
}



//console.log(amIWilson(8));//true
console.log(amIWilson(5));//true
console.log(amIWilson(7));//false
console.log(amIWilson(9));//false