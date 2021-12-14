function hexStringToRGB(hexString) {
  let hex = hexString.slice(1).match(/..?/g)
  let dec = hex.map(str => parseInt(str, 16))
  return { 'r': dec[0], 'g': dec[1], 'b': dec[2] };
}

const hexStringToRGBUp = (h) => {
  let toHex = (s,e) => parseInt(h.slice(s,e),16) 
  return {
    r: toHex(1, 3),
    g: toHex(3, 5),
    b: toHex(5, 7),
  };
};

const hexStringToRGBUp2 = (hex) => {
  let [r,g,b] = hex.match(/\w{2}/g).map(e => parseInt(e,16))
  return {r, g, b}
};





//console.log(hexStringToRGB("#ff"));
console.log(hexStringToRGB("#ff9933"));
console.log(hexStringToRGBUp("#ff9933"));
console.log(hexStringToRGBUp2("#ff9933"));