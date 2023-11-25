function convert(number) {
  return number.match(/.{1,2}/g).map(n => String.fromCharCode(n)).join('')
}


const convertUp = (num) => {
  return String.fromCharCode(...num.match(/../g))
 }

console.log(convert("65326667"));
console.log(convertUp("65326667"));
