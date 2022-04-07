function solution(yL, yR, fL, fR) {
  let strongMe = Math.max(yL, yR);
  let strongFriend = Math.max(fL, fR);
  return strongMe==strongFriend && yL+yR==fL+fR
}

function solutionTop(yL, yR, fL, fR) {
  var me = [yL, yR].sort().join('')
  var friend = [fL, fR].sort().join('')
  return me==friend
}
  


console.log(solution(10,15,15,10))
console.log(solutionTop(10,15,15,10))