function add(a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while(a.length || b.length || c){
    c+= ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c>9
  }
  return res
}


function addMe(a, b) {
  return (BigInt(a) + BigInt(b)).toString(); // Fix me!
}


console.log(add('11','22'))
console.log(addMe('11','11'))

/*
    99999
    99999
+ -------
   
*/
