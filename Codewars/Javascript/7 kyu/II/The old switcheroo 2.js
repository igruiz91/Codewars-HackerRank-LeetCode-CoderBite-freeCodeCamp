function encode(str) {
  return str
    .toLowerCase()
    .split("")
    .map((c) =>
      c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 130 ? c.charCodeAt(0) - 96 : c
    )
    .join("");
}

const encodeUp = (str) => {
  return str.replace(/[a-z]/gi,l => {
    let c = l.charCodeAt(0);
    return c - (c<97 ? 64 : 96)
})}
console.log(encode("abc"))
console.log(encodeUp("abc"))
