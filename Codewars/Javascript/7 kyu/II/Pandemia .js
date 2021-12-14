function infected(s) {
  let world = s.split("X");
  let end = world.map((c) =>
    c.includes("1")
      ? "1".repeat(c.length)
          .split("")
          .reduce((a, b) => a - +b,0)
      : c.split('').reduce((a,b)=> a+1,0)
  );
  let inf = end.reduce((a,b)=> a+= b<0 ? b*-1 : 0 ,0)
  let tot = world.reduce((a, b) => a + b.length, 0);
  return inf*100/tot;
}

function infected(s) {
  let count = 0,
    total = 0;
  let arr = s.split("X");
  arr.map((c) => {
    if (c.includes("1")) count += c.length;
    total += c.length;
  });
  return total ? (count * 100) / total : 0;
}

let s = "01000000X000X011X0X";
let x = "0000000010";

console.log(infected(s));
console.log(infectedAutomedon(s));
console.log(infected(x));
