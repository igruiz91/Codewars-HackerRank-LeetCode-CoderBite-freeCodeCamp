function findOddNames(list) {
  return list.filter(programmer => programmer.firstName.split('').reduce((a,b) => a+ +b.charCodeAt(0), 0) %2) || []
}
var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

console.log(findOddNames(list1))
