function pairElement(str) {
  let abc ={"A": "T", "T": "A", "C": "G", "G": "C"};
  let resp = str.split('')
  return resp.map((p) => [p, abc[p[0]]])
}


console.log(pairElement('GCG'));
