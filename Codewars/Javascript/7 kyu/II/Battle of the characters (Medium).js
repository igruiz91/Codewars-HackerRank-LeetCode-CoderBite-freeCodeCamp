function battle(x, y) {
  let calc = (n) => 
    n.split("")
    .map((n) =>
      (n.toUpperCase() == n) ? n.charCodeAt(0) - 64 : (n.charCodeAt(0) - 96)/2
    ).reduce((a,b) => a+b,0)
  return calc(x)>calc(y) ? x : calc(x)<calc(y) ? y : 'Tie!'
}


console.log(battle('Aaby'));