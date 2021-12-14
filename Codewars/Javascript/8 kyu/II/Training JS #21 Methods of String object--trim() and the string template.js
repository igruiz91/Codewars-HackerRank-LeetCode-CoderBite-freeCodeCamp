function fiveLine(s) {
  let clear = s.trim()
  for(var i = 1, resp=''; i<=5; i++)
    resp+=clear.repeat(i)+'\n'
  return resp.slice(0,-1)
}

console.log(fiveLine('a'))
