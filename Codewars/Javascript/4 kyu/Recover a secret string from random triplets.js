var recoverSecret = function (triplets) {
  for(let [first] of triplets){
    if(triplets.every(tuple => tuple.indexOf(first) <= 0)){
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift())
      return first + recoverSecret(triplets.filter(tuple => tuple.length>0))
    }
  }
  return ''
}

const recoverSecretUp = triplets => {
  let resp = ``;
  while(triplets.some(val => val.length)){
    resp += [...new Set(triplets.map(val => val[0]))].filter(val => triplets.every(v => v.indexOf(val) < 1))
    triplets = triplets.map(val =>  val.filter(v => v !== resp.slice(-1))).filter(val => val.length)
  }
  return resp
};

var triplets1 = [
    ['a', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['t', 'a', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
]
var triplets2 = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
]



console.log(recoverSecret(triplets1));
console.log(recoverSecretUp(triplets2));