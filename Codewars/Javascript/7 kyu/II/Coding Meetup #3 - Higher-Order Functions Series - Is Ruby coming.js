function isRubyComing(list) {
  for (const programmer of list) {
    if (programmer.language === "Ruby") return true;
  }
  return false;
}

const isRubyComingUp = (l) => {
  return l.some((e) => e === "Ruby");
};

//destructuring

const isRubyCommingUp2 = (list) => {
  return list.some(({ language }) => language === "Ruby");
};

var element = [
  {
    firstName: "Emma",
    lastName: "Z.",
    country: "Netherlands",
    continent: "Europe",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "Javascript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
];

console.log(isRubyComing(element));
console.log(isRubyCommingUp2(element));
