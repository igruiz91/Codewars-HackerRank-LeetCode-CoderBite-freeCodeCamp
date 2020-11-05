function distanceBetweenPoints(a, b) {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
}

const distanceBetweenPointsUp = (a,b) => {
  return Math.hypot(b.x-a.x, b.y-a.y)
}


let a = {x: 1, y:6}
let b = {x: 4, y:2}

console.log(distanceBetweenPoints(a,b))
console.log(distanceBetweenPointsUp(a, b));
