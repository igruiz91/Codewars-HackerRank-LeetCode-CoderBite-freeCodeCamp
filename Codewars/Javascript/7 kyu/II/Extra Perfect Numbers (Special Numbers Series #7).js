function extraPerfect(n) {
  let resp =[]
  for(let i=1; i<=n; i+=2)
    resp.push(i)
  return resp
}

const extraPerfectUp = (n) => {
  return [...Array(n+1).keys()].filter(x => x%2)
}


console.log(extraPerfect(7))
console.log(extraPerfectUp(7))
