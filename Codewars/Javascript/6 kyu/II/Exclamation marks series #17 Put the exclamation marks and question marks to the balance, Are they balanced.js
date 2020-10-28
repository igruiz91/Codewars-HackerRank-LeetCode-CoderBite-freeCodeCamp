function balance(left, right) {
  const rep = (hand) => hand.split('').map(e => e=='!' ? 2 : 3).reduce((a,b) => a+b, 0)
  return rep(left) == rep(right)
    ? "Balance"
    : rep(left) > rep(right)
    ? "Left"
    : "Right";
}


function balanceUp(l,r) {
  const w = (h) => [...h].reduce((a,b) => b=='!' ? a+2 :a+3, 0)
  return w(l) > w(r) ? "Left" : w(r) > w(l) ? "Right" : "Balance";
}


console.log(balanceUp('!!!', '???'));
console.log(balanceUp('!', '?'));
console.log(balanceUp('!?', '?!'));