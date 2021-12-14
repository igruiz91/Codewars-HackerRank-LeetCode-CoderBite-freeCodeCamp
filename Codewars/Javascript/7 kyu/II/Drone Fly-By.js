function flyBy(lamps, drone) {
  let len = drone.length, o = 'o'.repeat(len)
  return lamps.length>len ? o+lamps.slice(len) : o.slice(len-lamps.length)
}


const flyByUp = (lamps, drone) => {
  return [...lamps].fill(`o`, 0, drone.length).join(``)
};


console.log(flyBy("xxxxxx", "====T"));
console.log(flyBy("xxxxxxxxx", "==T"));
console.log(flyBy("xxx", "===T"));
