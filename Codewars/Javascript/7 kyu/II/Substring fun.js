function nthChar(words){
  return words.map((w,i) => w[i]).join('')
}

const nthCharUp = (w) => {
  return w.reduce((a,b,i) => a+b[i],"")
}


console.log(nthChar(["you", "rock", "oslo", "oreo"]));
console.log(nthCharUp(["you", "rock", "oslo", "oreo"]));
console.log(nthCharUp(["you", "or", "lose", "oreo" ]))
