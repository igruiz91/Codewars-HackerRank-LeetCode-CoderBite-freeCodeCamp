function expandedForm(num) {
  let [int, frac] = `${num}`.split('.')
  resp = [...conversionInt(int), ...conversionFrac(frac)].filter(v=> v!=0);
  return  resp.join(' + ')

}

const conversionInt = (n) => {
  return n ? n.split("").map((x, i, arr) => +x ? x * 10 ** (arr.length - i - 1) : 0).filter(z => z !=0) : ["0"];
}
const conversionFrac = (n) => {
  return n ? n.split("").map((x, i, arr) => +x ? `${x}/${10 **(i-1)}` : 0).filter(z => z!=0) : ["0"];
}
console.log(expandedForm(7260))
console.log(expandedForm(7260.45))
