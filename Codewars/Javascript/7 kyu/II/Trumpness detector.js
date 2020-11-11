function trumpDetector(trumpySpeech) {
  let v = trumpySpeech.replace(/[^aeiou]/gi, ' ').replace(/ +/g, ' ').trim().toUpperCase()
  let vowels =0, groups =0;
  v.replace(/(\w)\1{1,}/g, (match) => (vowels += match.length - 1));
  v.replace(/(\w)\1{0,}/g, (_) => groups+=1);
  return (vowels/groups).toFixed(2)*1
}


function trumpDetectorUp(trumpySpeech) {
  let arr = trumpySpeech.match(/([aeiou])(\1*)/gi)
  return +(arr.reduce((x,y) => x+y.length-1,0)/arr.length).toFixed(2)
}

console.log(trumpDetector("HUUUUUGEEEE WAAAAAALL"));
console.log(trumpDetectorUp("HUUUUUGEEEE WAAAAAALL"));