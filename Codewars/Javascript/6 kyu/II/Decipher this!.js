function decipherThis(str) {
  return str
    .split(" ")
    .map((e) =>
      e.replace(/(^\d+)?(\w*)/, (_, d, w) => {
        w = w.split("");
        [w[0], w[w.length - 1]] = [w[w.length - 1], w[0]];
        return String.fromCharCode(d) + w.join("");
      })
    )
    .join(" ");
}

const decipherThisUp = (str) => {
  return str
    .split(" ")
    .map((w) =>
      w.replace(/^\d+/, (c) => String.fromCharCode(c))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ");
};

let str = "72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o";

console.log(decipherThis(str));
console.log(decipherThis("72olle 103doo 100ya"));
console.log(decipherThisUp("72olle 103doo 100ya"));
