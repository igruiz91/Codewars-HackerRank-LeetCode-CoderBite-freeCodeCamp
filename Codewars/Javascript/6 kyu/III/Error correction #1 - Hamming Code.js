function encode(text) {
  return text.split('').map(c => ("00000000"+c.charCodeAt(0).toString(2)).slice(-8).split('').map(d => d == 0 ? '000' : '111').join('')).join('')
}

function decode(bits) {
  const errChange = (bts) => bts.split('').filter(b => b==1).length == 2 ? '1' : '0'
  bits = bits.match(/.{1,3}/g).map(e => e == '000' ? '0': e === '111' ? '1' : errChange(e)).join('')
  return bits.match(/.{1,8}/g).map((str) => String.fromCharCode(parseInt(str, 2))).join('');
}




//console.log(encode('hey'));
console.log(decode('000111000111000111000001000000111111000000111111000111111111000000111011000111111111000111000000'));
