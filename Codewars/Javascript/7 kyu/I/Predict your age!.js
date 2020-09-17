function predictAge(...ages){
    return Math.floor(Math.sqrt(ages.reduce((a,b) => a+ b**2,0),2)/2)
}

const predictAgeUp = (...ages) => Math.hypot(ages)/2|0

console.log(predictAge(65,60,75,55,60,63,64,45));