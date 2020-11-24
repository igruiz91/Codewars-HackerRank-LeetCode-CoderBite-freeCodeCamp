var swap = function (str) {
  let first = str[0].charCodeAt(0)
  let body = str.slice(1);
  let innerBody = body.slice(1,-1)
  return str.length > 2 ? first + body.slice(-1)+ innerBody+body[0] : first
};

const encryptThis = (text) => {
  return text.split(' ').map(w => swap(w)).join(' ')
};


const encryptThisUp = (text) => {
  return text
    .split(" ")
    .map((word) => word.replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`).replace(/^\w/, word.charCodeAt(0))).join(' ');
}



//'65 119esi 111dl 111lw 108dvei 105nn 97nn 111ka'
//'65 119esi 111dl 111lw 108dvei 105n 97n 111ka'


//console.log(encryptThis('A'));
console.log(encryptThis("Hello"));
console.log(encryptThisUp("Hello"));