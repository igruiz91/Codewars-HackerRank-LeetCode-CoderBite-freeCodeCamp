function getCombinations(list, size) {
  let resp = []
  let allCombinations = []
  for(let i=list.length; i>0; i--){
    for(let j = 0 ; j<list.length-i+1; j++){
      let key = resp.length;
      resp[key] = []
      for(let k = j; k<j+i; k++){
        resp[key].push(list[k])
      }
    }
  }
  let arrSize = resp.filter(arr => arr.length ==size).slice()
  return arrSize.reduce((acc, curr) => acc.concat(getPermutations(curr)), []).sort()
}

function getPermutations(arr) {
  let permutations = []
  const permutate = (a, resp = []) => {
    if(!a.length){
      permutations.push(resp)
      return
    }
    for(let i =0; i<a.length; i++){
      let curr = a.slice()
      let next = curr.splice(i, 1)
      permutate(curr, resp.concat(next))
    }
  }
  permutate(arr);
  return permutations;
}


console.log(getCombinations([1, 2, 3, 4], 2));
//console.log(getPermutations([1, 2, 3, 4]));