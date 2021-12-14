function countLanguages(list) {
  let resp = {};
  list.map((e) => resp[e.language] ? resp[e.language]++ : resp[e.language]=1);
  return resp;
}

const countLanguagesUp = (l) => l.reduce((a,b) => (a[b.language] ? a[b.language]++ : a[b.language]=1,a),{})




var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];


console.log(countLanguages(list1))
console.log(countLanguagesUp(list1));
console.log(countLanguagesUp2(list1));
