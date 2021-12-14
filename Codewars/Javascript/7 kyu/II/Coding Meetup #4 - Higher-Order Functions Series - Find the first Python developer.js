function getFirstPython(list) {
  for(const v of Object.values(list))
    if(v.language== 'Python') return `${v.firstName}, ${v.country}`
  return 'There will be no Python developers'
}


const getFirstPythonUp = (list) => {
  let dev = list.find(s => s.language ==='Python')
  return dev
    ? `${dev.firstName}, ${dev.country}`
    : "There will be no Python developers";
};


var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

console.log(getFirstPython(list1));
console.log(getFirstPythonUp(list1));