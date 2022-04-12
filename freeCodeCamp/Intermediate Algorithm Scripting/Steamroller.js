function steamrollArray(arr) {
  return arr.reduce((acc , curr) => {
    if(Array.isArray(curr)){
      return acc.concat(steamrollArray(curr))
    }else{
      return acc.concat(curr)
    }
  }, [])
}


let a =  [[[["a"]], [["b"]]]]

console.log(steamrollArray(a))
