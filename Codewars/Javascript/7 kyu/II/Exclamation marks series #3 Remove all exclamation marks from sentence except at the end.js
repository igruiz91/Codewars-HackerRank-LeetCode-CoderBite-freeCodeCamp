function remove(string) {
  let resp =[]
  for (let i = string.length-1, exclamation = true; i>=0; i--) {
    if(exclamation){
      if(string[i]!="!") exclamation = false
      resp.unshift(string[i]);
    }
    else{
      if(string[i]=="!") resp.unshift("");
      else resp.unshift(string[i]);
    }
  }
  return resp.join("")
}


const removeUp = (str) => {
  return str.replace(/!+(?!!*$)/g, "")
 }

console.log(remove("Hi!" ))
console.log(removeUp("Hi!" ))
console.log(remove("Hi! asi!" ))
console.log(removeUp("Hi! asi!" ))
