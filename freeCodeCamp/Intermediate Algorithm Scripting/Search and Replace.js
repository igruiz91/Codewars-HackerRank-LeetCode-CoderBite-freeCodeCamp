function myReplace(str, before, after) {
  let c = before[0].toUpperCase() === before[0];
  if(c) after = after.charAt(0).toUpperCase() + after.slice(1);
  else after = after.toLowerCase();
  return str.replace(before, after);
}


console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"))
