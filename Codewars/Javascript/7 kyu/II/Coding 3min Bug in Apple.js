function sc(apple){
  for(let i=0; i<apple.length; i++){
    for(let j=0; j<apple[i].length; j++){
      if(apple[i][j] === "B") return [i, j]
    }
  }
}

const sc = (apple) => {
  var row = apple.findIndex(x => x.includes("B"))
  var col = apple[row].indexOf("B")
  return [row, col]
}

const sc = (apple) => {
  for(let i=0; i<apple.length; i++){
    let j = apple[i].indexOf("B") >-1
    if(j>-1) return [i,j]
  }
}



let arr = [["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","B","A","A","A"]]
console.log(sc(arr));