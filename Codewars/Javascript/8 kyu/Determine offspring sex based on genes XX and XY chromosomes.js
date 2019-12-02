function chromosomeCheck(sperm) {
    return "Congratulations! You're going to have a "+ ((sperm =='XX') ? "daughter." : "son.")
}

function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
  }

console.log(chromosomeCheck('XY'));