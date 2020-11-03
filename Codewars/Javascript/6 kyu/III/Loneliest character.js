const loneliest = (str) => {
  str = str.trim()
  let obj={}
  for(let i=0; i< str.length; i++){
    if(str[i]!== ' '){
      let count = 0
      for(let j=1; j<str.length; j++){
        if(str[i+j] ===' '){
          count++
        }else break
      }
      for (let j = 1; j < str.length; j++) {
        if (str[i - j] === " ") {
          count++;
        } else break;
      }
      obj[str[i]] = count
    }
  }
  const max = Math.max(...Object.values(obj))
  const letters = []
  for(k in obj){
    if(obj[k] == max){
      letters.push(k)
    }
  }
  return letters
}

let a = 'a bcs           d k';

console.log(loneliest(a));
