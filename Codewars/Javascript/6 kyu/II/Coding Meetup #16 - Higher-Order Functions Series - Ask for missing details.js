function askForMissingDetails(list) {
  list = list.map((cm) => {
    for (const [x, y] of Object.entries(cm)) {
      if (y === null) cm.question = `Hi, could you please provide your ${x}.`;
    }
    return cm;
  });
  return list.some(o => o.hasOwnProperty('question')) ? list : []
}

var list1 = [
  {
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

var list2 = [
  {
    firstName: "Paulo",
    lastName: "K.",
    country: "Brazil",
    continent: "Americas",
    age: 19,
    language: "Python",
  },
];

console.log(askForMissingDetails(list1));
console.log(askForMissingDetails(list2));
