const removeEvenCount = (s) => {
  let obj = {};
  s = s.split("").map((e) => {
    if (!obj[e]) obj[e] = 1;
    else if (obj[e] % 2 != 0) {
      obj[e]++;
      return "";
    } else obj[e]++;
    return e;
  });
  return s.join("");
};

console.log(removeEvenCount("aabbccddaabbccddaa"));

//abcdabcda
//abcdabcda
