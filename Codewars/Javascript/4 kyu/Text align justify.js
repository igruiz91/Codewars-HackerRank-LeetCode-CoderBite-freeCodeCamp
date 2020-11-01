var justify = function (str, len) {
  let row = "",
    respArr = [];
  str = str.split(" ");
  for (let i = 0, l = str.length; i < l; i++) {
    if (row.length + str[i].length + 1 <= len) {
      row += " " + str[i];
    } else {
      respArr.push(row.trim());
      row = str[i];
    }
  }
  respArr.push(row);
  for (let i = 0; i < respArr.length - 1; i++) {
    respArr[i] = espaceado(respArr[i], len);
  }
  return respArr.join("\n");
};

const espaceado = (str, len) => {
  let espacios = len - str.length;
  if (espacios == 0) return str;
  str = str.split(" ");
  espacios += str.length - 1;
  for (let i = 0; i < espacios; i++) {
    let pos = i % (str.length - 1);
    str[pos] = str[pos] + " ";
  }
  return str.join("");
};

const justifyUp = (str, len) => {
  let words = str.split(" ");
  let lines = [];
  let lastLine = words.reduce((line, word) => {
    if (line) {
      if (line.length + word.length + 1 <= len) {
        return line + " " + word;
      }
      lines.push(line);
    }
    return word;
  });
  lines = lines.map((line) => {
    if (line.indexOf(" ") > 0) {
      for (let lineLen = line.length; lineLen < len; ) {
        line = line.replace(
          / +/g,
          (spaces) => spaces + (lineLen++ < len ? " " : "")
        );
      }
    }
    return line;
  });
  lastLine && lines.push(lastLine);
  return lines.join("\n");
};

const justifyUpTwo = (s, l) => {
  s = " " + s;
  const reg = RegExp(".{1," + (l + 1) + "}(?![a-zA-Z.,])", "g");
  return s
    .match(reg)
    .map((v, i, arr) => {
      v = v.trim();
      let s = l - v.length + 1;
      if (/ /g.test(v) && i < arr.length - 1)
        while (s > 0) v = v.replace(/ +/g, (m) => (s--, s > 0 ? m + " " : m));
      return v;
    })
    .join("\n");
};

//let test = 'Además del significado, '
//[ 'Además', 'del', 'significado,' ]

let text2 =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptas delectus impedit saepe quas sit voluptates in dicta ipsum nesciunt, odio ab eveniet eius cumque id nobis modi maxime aliquam.";
//console.log(espaceado(test));
let text =
  'Además del significado, sinónimos y antónimos de la palabra "cesó", se buscó inversamente en significados, sinónimos y antónimos de otras palabras y en los glosarios gauchesco, criollo, lunfardo, de jergas y modismos de Argentina.';
let text3 =
  "Lorem  ipsum  dolor  sit amet,consectetur  adipiscing  elit. Vestibulum    sagittis   dolor mauris,  at  elementum  ligula tempor  eget.  In quis rhoncus nunc,  at  aliquet orci. Fusce";

console.log(justify(text, 30));
console.log(justifyUp(text, 30));
console.log(justifyUpTwo(text, 30));

/*
'Además     del    significado,',
'sinónimos  y  antónimos  de la',
'palabra   "cesó",   se   buscó',
'inversamente  en significados,',
'sinónimos y antónimos de otras',
'palabras  y  en  los glosarios',
'gauchesco,  criollo, lunfardo,',
'de   jergas   y   modismos  de',
'Argentina.'
*/
