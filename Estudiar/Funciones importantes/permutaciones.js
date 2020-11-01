const permutations = (arr) => {
  let permutations = []
  const permute = (arr, resp = []) => {
    if(!arr.length){
      permutations.push(resp)
      return
    }
    
    for(let i =0; i<arr.length; i++){
      let curr = arr.slice()
      let next  = curr.splice(i, 1)
      permute(curr, resp.concat(next))
    }
  }
  permute(arr)
  return permutations
}


console.log(permutations([1,2,3]));