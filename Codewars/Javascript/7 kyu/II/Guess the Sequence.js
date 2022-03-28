var a="";

function sequence(x) {
  let resp = [],
    numbers = Array(x)
      .fill()
      .map((x, i) => i + 1);
  for (let i = 1; i <= 9; i++) {
    let temp = numbers.filter((x) => ("" + x).includes("" + i));
    resp.push(temp);
  }
  resp = resp.reduce((a, b) => a.concat(b));
  return [...new Set(resp)];
}
console.log(sequence(61))
