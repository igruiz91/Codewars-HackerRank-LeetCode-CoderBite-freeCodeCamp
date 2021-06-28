function findRoutes(routes) {
  let start = routes.shift();
  let resp =start.join(', ') , country = start[1];
  let find = true;
  while (find) {
    find=false
    for (let i = 0; i < routes.length; i++) {
      if(routes[i][0] === country){
        country = routes[i][1]
        resp+=', ' + country;
        find=true
        routes.splice(i,1)
        break
      }
    }
  }
  return resp;
}

console.log(
  findRoutes([
    ["USA", "BRA"],
    ["JPN", "PHL"],
    ["BRA", "UAE"],
    ["UAE", "JPN"],
  ])
);
