function filterDup(s) {
  let resp= '' 
  for(let i = 1; i<s.length ; i++){
    if(s[i] == s[i+1]) continue
    else resp +=s[i]
  }
  return resp
}

function dup(s) {
  return s.map(e => filterDup(e))
};



console.log(
  dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])
);
