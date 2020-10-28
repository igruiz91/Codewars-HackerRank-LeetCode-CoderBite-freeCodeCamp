function permutations(string) {
  string = string.split('')
  let result = []
  const permute = (arr, m=[]) => {
    if(arr.length === 0){
      result.push(m)
    }else{
      for(let i = 0; i<arr.length; i++){
        let curr = arr.slice()
        let next = curr.splice(i,1)
        permute(curr.slice(), m.concat(next))
      }
    }
  }
  permute(string)

  return [...new Set(result.map((arr) => arr.join("")))];
}

console.log(permutations('aabb'));
