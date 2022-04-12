function orbitalPeriod(arr) {
  let resp = []
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  arr.map((obj) =>{
    let name = obj.name;
    let calc = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM))
    resp.push({ name, orbitalPeriod: calc });
  })
  return resp
}


console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))
