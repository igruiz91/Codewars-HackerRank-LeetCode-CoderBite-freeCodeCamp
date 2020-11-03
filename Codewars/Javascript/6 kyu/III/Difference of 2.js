function twosDifference(input) {
  let resp = []
  input = input.sort((a,b) => a-b)
  for(let i=0; i<input.length; i++){
    let num = input[i]+2
    if(input.indexOf(num) != -1) resp.push([input[i], num])
  }
  return resp
}


const twosDifferenceUp = (input) => {
  return input.filter(n => input.indexOf(n+2)!= -1).sort((a,b) => a-b).map(n => [n, n+2])
};



console.log(twosDifference([4, 1, 2, 3]));
console.log(twosDifferenceUp([4, 1, 2, 3]));