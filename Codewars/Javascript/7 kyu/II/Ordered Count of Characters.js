const orderedCount = (text) => {
  for(var i = 0, resp = []; i<text.length; i++){
    let index =  resp.find(x => x[0] == text[i])
    if(index == undefined){
      resp.push([text[i], 1])
    }else{
      index[1]++
    }
  }
  return resp
};

const orderedCountUp = (text) => {
  return [... new Set(text)].map(char => [char, text.split(char).length-1])
}



const orderedCountObjectProblem = (text) => {
  let resp =[]
  console.log(text.split(''));
  let toObj = text.split('').reduce((obj, curr) =>{
    obj[curr] ? obj[curr]++ : obj[curr]=1
    return obj
  },{})

  console.log(toObj);
  for(const [k,v] of Object.entries(toObj)){
    resp.push([k,v])
  }
  return resp
};



//console.log(orderedCount("abracadabra"));
console.log(orderedCount("233312"));
console.log(orderedCountUp("233312"));

var orderedCountTry = (text) => {
  let resp = {},
    arr = [];
  text.split("").map((c) => (resp[c] ? resp[c]++ : (resp[c] = 1)));
  for (let [key, val] of Object.entries(resp)) arr.push([key, val]);
  return arr;
};