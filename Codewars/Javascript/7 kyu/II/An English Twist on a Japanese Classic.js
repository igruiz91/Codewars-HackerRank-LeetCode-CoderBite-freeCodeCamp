function shiritori(words) {
  let resp = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] == "") break;
    if (resp.length === 0) {
      resp.push(words[i]);
      continue;
    }
    if (words[i].slice(0, 1) == resp[resp.length - 1].slice(-1))
      resp.push(words[i]);
    else break;
  }
  return resp;
}

const shiritoriUp = (words) => {
  let resp = []
  for(let w of words){
    if(!w.length || resp.length && w[0]!== resp[resp.length-1].slice(-1))break
    resp.push(w)
  }
  return resp
};



console.log(
  shiritori(["dog", "goose", "elephant", "tiger", "rhino", "orc", "cat"])
);
console.log(
  shiritoriUp(["dog", "goose", "elephant", "tiger", "rhino", "orc", "cat"])
);
