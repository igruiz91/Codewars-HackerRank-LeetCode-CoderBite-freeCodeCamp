function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function (term) {
  term = term.split('')
  let start = 0; count =0, max = Number.MIN_SAFE_INTEGER, resp =''
  for(let i=0; i<this.words.length; i++){
    count = 0;
    w = this.words[i].split('') 
    for(let j = 0; j< term.length; j++){
      let pos = w.indexOf(term[j], start);
      if(pos>=start){
        start=pos+1
        count++
      }
    }
    if((w.length-count)>max){
      max = count
      resp = this.words[i]
    }
    start = 0
  }
  return resp
};


languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);

console.log(languages.findMostSimilar("java"));