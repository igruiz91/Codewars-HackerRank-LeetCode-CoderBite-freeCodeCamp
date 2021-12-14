function tripleX(str) {
  return /^[^x]*xxx/.test(str)
}


const tripleXUp = (str) => {
  let x = str.indexOf('x')
  return x> -1 && x === str.indexOf('xxx')
}


console.log(tripleX("abraxxxas"));
console.log(tripleXUp("abraxxxas"));
console.log(tripleX("xoxotrololololololoxxx"));
console.log(tripleXUp("xoxotrololololololoxxx"));
