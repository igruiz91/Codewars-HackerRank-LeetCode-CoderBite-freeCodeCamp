function spongeMeme(sentence) {
  var change = true;
  sentence = sentence.toLowerCase().split(" ");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i]
      .split("")
      .map((c, i) =>
        change
          ? i % 2 == 0
            ? c.toUpperCase()
            : c.toLowerCase()
          : i % 2 == 0
          ? c.toLowerCase()
          : c.toUpperCase()
      )
      .join("");

    if(sentence[i].length % 2 == 0) change =!change;
  }
  return sentence.join(" ");
}

const spongeMemeUp = (str) => {
  return str.split('').map((c,i) => i%2 ? c.toLowerCase() : c.toUpperCase()).join('')
 }

console.log(spongeMeme("stop Making spongebob Memes!"));
console.log(spongeMemeUp("stop Making spongebob Memes!"));
//"StOp mAkInG SpOnGeBoB MeMeS!"
