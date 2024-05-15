function compoundArray(a, b) {
  let max = Math.max(a.length, b.length);
  let resp = []
  for(let i = 0; i < max; i++){
    if (a[i]!= undefined){
      resp.push(a[i])
      if(b[i]!= undefined) resp.push(b[i])
    }else resp.push(b[i])
  }
  return resp
}


const compoundArrayUp = (a, b) => {
  for(var i=0, resp=[]; i < Math.max(a.length, b.length); i++){
    if(!isNaN(a[i])) resp.push(a[i])
    if(!isNaN(b[i])) resp.push(b[i])
  }
  return resp
};

console.log(compoundArray([11, 12], [21, 22, 23, 24]));
console.log(compoundArrayUp([11, 12], [21, 22, 23, 24]));


