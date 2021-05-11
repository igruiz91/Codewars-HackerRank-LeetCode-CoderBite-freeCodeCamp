function firstToLast(str, c) {
  let f = str.indexOf(c), l = str.lastIndexOf(c)
  return f== l && f== -1
    ? -1
    : Math.abs(str.indexOf(c) - str.lastIndexOf(c));
}


const firstToLastUp = (str,c) => {
  let f = str.indexOf(c), l = str.lastIndexOf(c);
  return f == -1 ? -1 : f-l
};

const firstToLastUp2 = (str,c) => {
  return str.indexOf(c) == -1 ? -1 : str.indexOf(c)- str.lastIndexOf(c)
}




console.log(firstToLast('ababc', 'c'))
console.log(firstToLast("ababc", "d"));
console.log(firstToLastUp2("ababc", "d"));
