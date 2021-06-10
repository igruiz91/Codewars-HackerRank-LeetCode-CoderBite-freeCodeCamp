var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}

function aliasGen() {
  let n = firstName[arguments[0][0].toUpperCase()], s = surname[arguments[1][0].toUpperCase()]
  return (n== undefined || s== undefined) ? `Your name must start with a letter from A - Z.` : `${n} ${s}`;
}


console.log(aliasGen("1Alike", "Cillington")); // Alpha Cache