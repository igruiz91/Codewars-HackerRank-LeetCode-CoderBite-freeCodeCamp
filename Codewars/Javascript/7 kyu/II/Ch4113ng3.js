function nerdify(txt) {
  return txt.split('').map((c) => c=='a' || c =="A" ? '4' : c == 'e' || c =="E" ? '3' : c== "i" || c =="I" ? '1' : c).join('')
}

const nerdify_up = (txt) => {
  return txt.replace(/[aelAE]/g, a => ({'a' : 4, 'e':3 , 'l': 1}[a.toLowerCase()]))
}



console.log(nerdify("Fundamentals"));
console.log(nerdify_up("Fundamentals"));
