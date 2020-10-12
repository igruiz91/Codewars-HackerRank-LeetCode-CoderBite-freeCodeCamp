function grabDoll(dolls){
  var bag=[];
  for(let i = 0; i<dolls.length; i++){
    if(dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll"){
      bag.push(dolls[i])
      if(bag.length == 3) break
    }else continue
  } 
  return bag;
}

function grabDollUp(dolls){
  let bag = []
  for(doll of dolls)
    if(doll == "Hello Kitty" || doll =="Barbie doll" ){ 
      bag.push(doll)
      if (bag.length > 2) break;
    }else continue
  return bag
}
let arr = [
  "Mickey Mouse",
  "Barbie doll",
  "Hello Kitty",
  "Hello Kitty",
  "Hello Kitty",
  "Snow white",
];

console.log(grabDoll(arr))
console.log(grabDollUp(arr));