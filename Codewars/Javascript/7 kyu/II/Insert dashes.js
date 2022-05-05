function insertDash(num) {
  let str = `${num}`.split(''), resp='';
  str.map((e,i,arr)=>{
    if(e%2!=0 && arr[i+1]%2!=0) resp+=e+'-'
    else resp+=e
  })
  return resp.slice(-1)=="-" ? resp.slice(0,-1) : resp
}

const insertDashUp = (num) => {
  return `${num}`.replace(/[13579](?=[13579])/g, '$&-')};


console.log(insertDash(454793));
console.log(insertDash(123456));
console.log(insertDash(1003567));
console.log(insertDashUp(454793));
console.log(insertDashUp(123456));
console.log(insertDashUp(1003567));
