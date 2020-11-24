var splitInParts = function (s, l) {
  let reg = new RegExp(/\w+{0, l}/);
  return s.split(reg)
};



console.log(splitInParts("supercalifragilisticexpialidocious", 3));