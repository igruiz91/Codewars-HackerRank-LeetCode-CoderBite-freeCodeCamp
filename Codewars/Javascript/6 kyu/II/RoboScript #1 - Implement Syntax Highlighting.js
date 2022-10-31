function highlight(code) {
  console.log(code);
  code = code.match(/[0-9]+|(.)\1+|[a-z]|\(|\)|\(\)/gi);
  const obj = { F: "pink", L: "red", R: "green" };
  return code
    .map((c) =>
      c[0] in obj
        ? `<span style="color: ${obj[c[0]]}">${c}</span>`
        : Number.isInteger(parseInt(c))
        ? `<span style="color: orange">${c}</span>`
        : c
    )
    .join("");
}

console.log(highlight("FFFR345F2LLL"));
console.log(
  highlight("12F2L(976FF624196F3840()3L2L380R8(R4()630R(0)LLL(4(3RR6)7")
);

/*
12F2L(976FF624196F3840()3L2L380R8(R4()630R(0)LLL(4(3RR6)7


'<span style="color: orange">12</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">L</span>(<span style="color: orange">976</span><span style="color: pink">FF</span><span style="color: orange">624196</span><span style="color: pink">F</span><span style="color: orange">3840</span>()<span style="color: orange">3</span><span style="color: red">L</span><span style="color: orange">2</span><span style="color: red">L</span><span style="color: orange">380</span><span style="color: green">R</span><span style="color: orange">8</span>(<span style="color: green">R</span><span style="color: orange">4</span>()<span style="color: orange">630</span><span style="color: green">R</span>(0)<span style="color: red">LLL</span>(<span style="color: orange">4</span>(<span style="color: orange">3</span><span style="color: green">RR</span><span style="color: orange">6</span>)<span style="color: orange">7</span>' to equal

'<span style="color: orange">12</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">L</span>(<span style="color: orange">976</span><span style="color: pink">FF</span><span style="color: orange">624196</span><span style="color: pink">F</span><span style="color: orange">3840</span>()<span style="color: orange">3</span><span style="color: red">L</span><span style="color: orange">2</span><span style="color: red">L</span><span style="color: orange">380</span><span style="color: green">R</span><span style="color: orange">8</span>(<span style="color: green">R</span><span style="color: orange">4</span>()<span style="color: orange">630</span><span style="color: green">R</span>(<span style="color: orange">0</span>)<span style="color: red">LLL</span>(<span style="color: orange">4</span>(<span style="color: orange">3</span><span style="color: green">RR</span><span style="color: orange">6</span>)<span style="color: orange">7</span>'
*/
