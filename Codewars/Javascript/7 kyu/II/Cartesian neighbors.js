function cartesianNeighbor(x, y){
  let resp = []
  for(let i = x-1; i <= x+1; i++){
    for(let j = y-1; j <= y+1; j++){
      if(i==x && j==y) continue
      resp.push([i,j])
    }
  }
  return resp;
}


console.log(cartesianNeighbor(3,5))
