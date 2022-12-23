function capitalsFirst(str) {
  let cap = [], low = []
  for(let word of str.split(' ')){
    let firstChar = word[0]
    if(!/[a-z]/i.test(firstChar)) continue
    if (firstChar.toUpperCase() === word[0]) cap.push(word);
    else low.push(word)
  }
  return cap.concat(low).join(' ');
}


console.log(capitalsFirst("123 You Me baby and"));
console.log(capitalsFirst("hey You, Sort me Already!"));
