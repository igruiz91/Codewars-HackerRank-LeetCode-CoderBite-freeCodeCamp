function findSpaceship(map) {
  let arr =  map ? map.split('\n').reverse() : []
  for(let i=0; i<arr.length; i++){
    if(arr[i].includes('X'))
      return [arr[i].indexOf('X'), i]
  }
  return "Spaceship lost forever.";
}


const findSpaceshipFunctional = (map) => {
  let position = map && map.split('\n').reverse().map((row,i) => ~row.indexOf('X') ? [row.indexOf('X'), i] : false).filter(x => x)
  return (position && position[0]) || "Spaceship lost forever.";
}

console.log(~-1)

let str = `..........
..........
..........
.......X..
..........
..........`;
console.log(findSpaceship(str))
console.log(findSpaceshipFunctional(str));
