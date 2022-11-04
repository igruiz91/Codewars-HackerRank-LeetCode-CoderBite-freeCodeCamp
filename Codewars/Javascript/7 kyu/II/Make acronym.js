function toAcronym(inp) {
  return inp.split(' ').map(w => w[0]).join('').toUpperCase();
}

const toAcronymUp = (inp) => {
  return inp.replace(/(\w).*?\b[^\w]*/g,"$1").toUpperCase();
}


let tests = [
  ["Code Wars", "CW"],
  ["Water Closet", "WC"],
  ["Portable Network Graphics", "PNG"],
  ["PHP: Hypertext Preprocessor", "PHP"],
  ["hyper text markup language", "HTML"],
];

const testFunc = (fnc, arr) => {
  return arr.map(([string, expected]) => formatOutputTest(string, fnc, expected)).join('\n')
}

const formatOutputTest = (str, func, result) => {
  return `${str}: ${func(str)} = ${result} | ${func(str)===result}`;
}



console.log(testFunc(toAcronym,tests));
console.log("----------------------------------------------------------------")
console.log(testFunc(toAcronymUp, tests));
//const {}
