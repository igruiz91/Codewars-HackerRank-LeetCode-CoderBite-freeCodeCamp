function rotate(str) {
  let resp = []
  for(let i=0; i<str.length; i++) {
    let a = str[0];
    str = str.slice(1) + a;
    resp.push(str)
  }
  return resp
}


const rotateUp = (str) => {
  return str.split('').map(w => str.slice(1)+str.slice(0,1))
}

console.log(rotate("Hello"))
console.log(rotateUp("Hello"))
