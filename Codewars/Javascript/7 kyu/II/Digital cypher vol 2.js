function decode(code, n) {
  let len  = code.length
  n = `${n}`.repeat(Math.ceil(len / (`${n}`.length))).slice(0,len).split('').map(Number)
  return code.map((x, i) => String.fromCharCode(x -n[i] +96)).join('');
}

const decodeUp = (code, n, k = `${n}`) => {
  return code.map((x,i) => String.fromCharCode(x-k[i%k.length] +96)).join('');
 }

let test = [10, 8, 26, 7, 16, 23, 26, 16, 14, 7, 19, 7, 20, 18, 15, 25, 6, 9];

//console.log(decode([ 20, 12, 18, 30, 21], 1939))
console.log(decode(test, 2))
console.log(decodeUp(test, 2))
