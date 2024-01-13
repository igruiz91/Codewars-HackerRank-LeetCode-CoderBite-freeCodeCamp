function pattern(n) {
  let resp = []
  for(let i = 1; i <= n; i++) 
    if(i%2 == 1) resp.push(`${i}`.repeat(i))
  return resp.length ? resp.join("\n") : ""
}


console.log(pattern(3))
console.log(pattern(5))
