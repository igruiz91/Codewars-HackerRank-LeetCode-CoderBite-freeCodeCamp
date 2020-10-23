function encode(input) {
  let last='', resp=[], count=0, i=-1
  for(const c of input){
    if(c==last){
      newLetter = true
      count++
    }else{
      i++
      last=c
      count=1
      resp.push([count,c])
    }
    if(resp[i][0]<count) resp[i]=[count,c]
  }
  return resp.map(arr => arr.join('')).join('')
}

function decode(input) {
  letters = input.match(/[a-z]/gi)
  let numbers='';
  let resp=''
  for (let i = 0; i < input.length; i++) {
    if(input[i]==letters[0]){
      resp+=letters.shift().repeat(Number(numbers))
      numbers=''
    }else{
      numbers+=input[i]
    }
  }
  return resp
}


const encodeUp = (input) => {

  return input.replace(/(.)\1*/g, (match,p1) => {
    console.log(p1)
    return match.length+p1
  })
}

const decodeUp = (input) => {
  return input.replace(/(\d+)(.)+?/g, (_,p1,p2) => p2.repeat(p1))
}



//console.log(encode("AAABBBCCCD"));
console.log(encodeUp("AAABBBCCCD"));
// console.log(decode("10A1B"));
// console.log(decodeUp("10A1B"));