function highlight(code) {
  const obj = { F: "pink", L: "red", R: "green"};
  return code
    .split("")
    .map((c) =>
      c in obj
        ? `<span style="color: ${obj[c]}">${c}</span>`
        : Number(c)
        ? `<span style="color: orange">${c}</span>`
        : ""
    )
    .join("");
}


console.log(highlight("F3RF5LF7"));