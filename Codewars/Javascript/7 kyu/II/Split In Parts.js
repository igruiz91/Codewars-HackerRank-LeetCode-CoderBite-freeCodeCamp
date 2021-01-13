var splitInParts = function (s, l) {
  let reg = new RegExp('\\w{1,'+ l +'}', 'gi');
  return s.match(reg).join(' ')
};

var splitInParts2 = function (s, partLength) {
  let resp = []
  for (let i = 0; i < s.length; i+=partLength) { 
    resp.push(s.slice(i, i+partLength));
  }
  return resp.join(' ')
};

const splitInPartsUp = (s, l) => s.match(new RegExp(`.{1,${ l }}`, 'g')).join(' ')





console.log(splitInParts2("supercalifragilisticexpialidocious", 3));
console.log(splitInParts("supercalifragilisticexpialidocious", 3));
console.log(splitInPartsUp("supercalifragilisticexpialidocious", 3));


//let a = 'supercalifragilisticexpialidocious';

// console.log(a.slice(0, 3));
// console.log(a)