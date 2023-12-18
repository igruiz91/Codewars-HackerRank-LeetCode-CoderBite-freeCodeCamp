function neutralise(s1, s2) {
  let resp = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[i]) {
      resp += s1[i];
    } else resp += "0";
  }
  return resp;
}

console.log(neutralise("--++--", "++--++"));
console.log(neutralise("-+-+-+", "-+-+-+"));
