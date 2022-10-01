function wordSearch(query, seq) {
  let resp = seq.filter((w) => w.toLowerCase().includes(query.toLowerCase()));
  return resp.length ? resp : ["Empty"];
}

const wordSearchUp = (q, seq) => {
  let reg = new RegExp(q,'i')
  let resp = seq.filter(w => reg.test(w))
  return resp.length ? resp : ["Empty"]
}

const wordSearchUp2 = (q, a) => {
  return (a = a.filter(w => w.match(new RegExp(q, 'i'))))[0] ? a : ["Empty"]
}


console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]));
console.log(wordSearchUp("ab", ["za", "ab", "abc", "zab", "zbc"]));
console.log(wordSearchUp2("ab", ["za", "ab", "abc", "zab", "zbc"]));
