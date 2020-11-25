function rgb(r, g, b) {
  const toHex = (arg) => {
    (arg<0) ? arg = 0 : (arg>255) ? arg = 255 : arg
    let hex = arg.toString(16).toUpperCase()
    while(hex.length<2)
      hex = '0'+hex
    return hex
  }
  return toHex(r)+toHex(g)+toHex(b)
}
function rgb2(r, g, b) {
  const toHex = (arg) => {
    arg < 0 ? (arg = 0) : arg > 255 ? (arg = 255) : arg;
    return ("0"+(arg.toString(16))).slice(-2).toUpperCase();
  };
  return toHex(r) + toHex(g) + toHex(b);
}
function rgb2plus(r, g, b) {
  const toHex = n => ("0" + Math.max(0, Math.min(n,255)).toString(16)).slice(-2).toUpperCase();
  return toHex(r) + toHex(g) + toHex(b);
}

const rgbOneLine = (r,g,b) => [r,g,b].map(n => n>=255 ? n="FF" : n<=0 ? n='00' : n.toString(16).toUpperCase()).join('')

console.log(rgb(173, 255, 47));
console.log(rgb2(173, 255, 47));
console.log(rgb2plus(173, 255, 47));
console.log(rgbOneLine(173, 255, 47));