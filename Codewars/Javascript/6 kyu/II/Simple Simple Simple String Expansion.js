function stringExpansion(s) {
  let resp = s.match(/(\d[a-z]+)|([a-z]+)/gi);
  return resp ?  resp
    .map((str) => /\d/g.test(str) ?
      str
        .split("")
        .map((c, i, arr) => (i == 0 ? "" : c.repeat(Number(arr[0]))))
        .join("") : str
    )
    .join("") : ''
}

const stringExpansionUp = (s) => {
  return s.replace(/\d\D*/g, m => m.slice(1).replace(/./g, c => c.repeat(m[0])))
}

console.log(stringExpansion("1111"));
console.log(stringExpansion("a2bcde"));
console.log(stringExpansion("abcde"));
console.log(stringExpansion("3D2a5d2f"));

console.log(stringExpansionUp("1111"));
console.log(stringExpansionUp("a2bcde"));
console.log(stringExpansionUp("abcde"));
console.log(stringExpansionUp("3D2a5d2f"));
