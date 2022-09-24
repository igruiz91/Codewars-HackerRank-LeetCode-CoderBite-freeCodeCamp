function filterEvenLengthWords(words) {
  return words.filter(w => w.split('').length%2==0)
}


console.log(filterEvenLengthWords(["word", "words", "word", "words"]));
