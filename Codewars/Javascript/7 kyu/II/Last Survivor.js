function lastSurvivor(letters, coords) {
  letters =  letters.split('')
  while(letters.length > 1){
   letters.splice(coords.shift(),1)
  }
  return letters[0]
}

const lastSurvivorUp = (l,c) => {
  let arr = [...l]
  for(i in c) arr.splice(i,1)
  return arr[0]
}



console.log(lastSurvivor('zbk', [0, 1]));
console.log(lastSurvivorUp('zbk', [0, 1]));
