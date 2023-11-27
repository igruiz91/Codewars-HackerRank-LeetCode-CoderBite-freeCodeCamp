function whoseBicycle(diary1, diary2, diary3) {
  let sons = ["first", "second", "third"]
  let notes = [...arguments].map(n => {
    let values = Object.values(n)
    let promValues = values.reduce((acc, n) => (acc += n));
    return promValues;
  })

  return `I need to buy a bicycle for my ${
    sons[notes.lastIndexOf(Math.max(...notes))]
  } son.`;
}


let testCase1 = [
  {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  },
  {
    'algebra': 8,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  },
  {
    'algebra': 6,
    'history': 5,
    'physics': 5,
    'geography': 9,
    'chemistry': 10},
];

console.log(whoseBicycle(...testCase1));
