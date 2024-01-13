function swap(s, n) {
  let nToBin = n.toString(2)
  nToBin = nToBin.repeat(Math.abs(s.length - nToBin.length))
  let resp=""
  for (let i = 0, count=0; i < s.length;i++){
    if(/\W/.test(s[i])) {
      resp+=s[i]
      continue;
    }
    if(nToBin[count]=="1") {
      resp+=swapCase(s[i])
    }
    else resp+=s[i]
    count++
  }
  return resp
}



const swapUp = (s, n) => {
  n = n.toString(2)
  n = n.padEnd((s || []).length, n).split("")
  return [...s].map(c => /[a-z]/i.test(c) ? (n.shift() =="1" ? swapCase(c) : c): c).join("")
}

const swapCase = (char) => {
  return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()
}
console.log(swap("Hello world!", 11), "heLLO wORLd!");
console.log(swapUp("Hello world!", 11), "heLLO wORLd!");
// console.log(swap("RkDc?CymUM", 560697));
// console.log(swapUp("RkDc?CymUM", 560697));


