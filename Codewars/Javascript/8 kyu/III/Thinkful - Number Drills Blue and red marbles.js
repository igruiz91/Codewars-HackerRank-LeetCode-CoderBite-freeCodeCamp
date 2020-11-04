function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let reds =  (blueStart-bluePulled)
    let blues = (redStart-redPulled)
    return reds/(blues+reds)
}

console.log(guessBlue(5, 5, 2, 3));