function unscrambleEggs(word) {
  return word.split('egg').join('')
}

const unscrambleEggsUp = (w) => {
  return w.replace(/egg/gi, "")
}


console.log(unscrambleEggs("Beggegeggineggneggeregg")) //"Beginner"
console.log(unscrambleEggsUp("Beggegeggineggneggeregg")) //"Beginner"

