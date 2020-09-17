const omnibool = { n: 1, valueOf: () => (this.n = !this.n) }

var omniboolUp = {}
omniboolUp.valueOf = () => Math.random() > 0.5

let i = 0;
var omniboolUp2 = { toString: _ => !(i++) }