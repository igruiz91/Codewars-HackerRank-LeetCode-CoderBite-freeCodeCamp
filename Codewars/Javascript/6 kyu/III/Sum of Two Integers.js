function addTry(x, y) {

  let xArr = new Array(x)
  let yArr = new Array(y)
  return xArr.concat(yArr).length
}


const add = (x, y) => {
  while(y!=0){
    let carry = x&y;
    x = x^y
    y = carry << 1
    console.log(carry, x, y);
  } 
  return x 
}


console.log(add(12, 21));