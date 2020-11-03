function longestRepetition(s) {
  let len = s.length;
  let count;
  let resp = ["", 0];
  for (let i = 0; i < len; i++) {
    count = 1;
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        count++;
      } else {
        break;
      }
    }
    if(resp[1]<count) resp=[s[i], count]
  }
  return resp;
}

const longestRepetitionUp = (s) => {
  return s ? s.match(/(.)\1*/g).map((s,i) => [s[0],s.length, i]).sort((a,b) => (b[1]-a[1] || a[2]-b[2]))[0].splice(0,2) : ["", 0]
};

//una iteracion
const longestRepetitionUp2 = s => {
  let max=0
  let char =''
  for (let i = 1, l=s.length, c=1; i <= l; i++) {
    if(s[i] == s[i-1]) c++
    else{
      if(c>max){
        max = c
        char = s[i-1]
      }
      c=1
    }
  }
  return [char, max]
}

const longestRepetitionUp3 = (str) => {
  let last = "",
    lastCount = 0,
    max = [last, lastCount];
    for(const c of str){
      if(c == last){
        lastCount++
      }else{
        last=c
        lastCount=1
      }
      if(max[1]<lastCount) max = [last, lastCount]
    }
    return max
};




//console.log(longestRepetition('aaaabcbbaaaaa'));
//console.log(longestRepetition("aaaabb"));
console.log(longestRepetition("baaaa"));
console.log(longestRepetitionUp("baaaa"));
console.log(longestRepetitionUp3("baaaa"));