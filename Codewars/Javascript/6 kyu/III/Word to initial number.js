function convert(s) {
  let countEspecials = 0
  let count =2
  const replacement = (c) => new RegExp(c, "gi")
  for(let i=0; i<s.length; i++){
    if(i == 0){
      countEspecials++
      s = s.replace(replacement(s[i]), 1);
    }else if(s[i] == parseInt(s[i])){
      continue
    }else if(countEspecials==1){
      countEspecials++
      s = s.replace(replacement(s[i]), 0);
    }else{
      s = s.replace(replacement(s[i]), count);
      count++
    } 
  }
  return Number(s)
}

const convertUp = (s) => {
  const seen = [...new Set(s)].reduce((acc, letter, i) => {
    let digit = [1,0,2,3,4,5,6,7,8,9][i]
    acc.set(letter, digit)
    return acc
  }, new Map())
  return Number(s.replace(/./g, match => seen.get(match)))
}

const convertUp2 = (s) => {
  let map = {}, count=0;
  return +s.toLowerCase().replace(/./g , c=> {
    if (!map.hasOwnProperty(c)) {
      map[c] = count > 1 ? count : 1 - count;
      count++;
    }
    return map[c]
  })
}


console.log(convertUp("CodeWars"));
console.log(convert("CcodeWars"));
console.log(convertUp2("CcodeWars"));

//10234567
//10234567
