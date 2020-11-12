function containAllRots(str, arr) {
  if (str === '') return true
  const rotations = function(){
    let resp = []
    for(let i=0; i<str.length; i++){
      let newStr ='', k=0, j=i;
      for(let i2=i; i2<str.length; i2++){
        newStr+=str[j]
        k++
        j++
      }
      j=0
      while(j<i){
        newStr+=str[j]
        j++
        k++
      }
      resp.push(newStr)
    }
    return resp
  }()
  for(let i=0;i<rotations.length; i++){
    if(!arr.includes(rotations[i])) return false
  }
  return true
}


const containsAllRotsUp = (str,arr) => {
  for(let i=0; i<str.length; i++){
    if(!arr.includes(str.slice(i)+str.slice(0,i))) return false
  }
  return true
}

console.log(
  containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
);
console.log(
  containsAllRotsUp("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
);

function containAllRotsUp2(str, arr) {
  return [...str].map((_,i) => str.slice(i)+str.slice(0,i)).every(x => arr.includes(x))
}


console.log(
  containsAllRotsUp2("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
);
