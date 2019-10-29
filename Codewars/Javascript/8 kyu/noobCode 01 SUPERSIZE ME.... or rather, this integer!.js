function superSize(num){
    return +(`${num}`.split('').sort((a,b)=> b-a).join(''))
}

function superSize2(n){
    return parseInt(n.toString().split('').sort().reverse().join(''))
  }

console.log(superSize(105));