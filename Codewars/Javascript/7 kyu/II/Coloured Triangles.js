function triangle(row) {
  let newRow = ''
  if(row.length>1){
    for(let i=0; i<row.length-1; i++){
      let pair = row[i]+row[i+1]
      switch (pair) {
        case "BG":
        case "GB": newRow += "R"; break;
        case "RG":
        case "GR": newRow += "B"; break;
        case "BR":
        case "RB": newRow += "G"; break;
        default: newRow += row[i]; break;
      }
    }
    return triangle(newRow)
  }else return row
}

function triangleUp(row) {
  let reduced = row.length > 1 ? "" : row;
  for (let i = 0; i < row.length-1; i++) {
    reduced+= row[i] == row[i+1] ? row[i] : 'RGB'.replace(row[i], '').replace(row[i+1], '')
  }
  return reduced.length > 1 ? triangleUp(reduced) : reduced
}

console.log(triangle("RBRGBRBGGRRRBGBBBGG"));
console.log(triangle("RRGBRGBB"));
console.log(triangleUp("RRGBRGBB"));
