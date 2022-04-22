function searchNames(logins) {
  return logins.filter(arr => arr[0].split('').slice(-1)== '_')
}

const searchNamesUp = (arr) => {
  return arr.filter((e) => e[0].endsWith('_'))
};


let test = [
  ["foo", "foo@foo.com"],
  ["bar_", "bar@bar.com"],
];

let a = "aassss" ;
a.

console.log(searchNames(test))
console.log(searchNamesUp(test));
