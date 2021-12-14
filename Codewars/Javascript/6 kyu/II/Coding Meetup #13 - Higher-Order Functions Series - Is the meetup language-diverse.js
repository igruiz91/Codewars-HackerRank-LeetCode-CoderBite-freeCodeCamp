function isLanguageDiverse(list) {
  let js = 0, py = 0, rub = 0;
  list.map((e) => {
    e.language == "JavaScript" ? js++ : e.language == "Python" ? py++ : rub++;
  });
  let max = Math.max(rub, py, js);
  return max / py <= 2 && max / js <= 2 && max / rub <= 2;
}

const isLanguageDiverseUp = (list) => {
  let l = list.map(dev => dev.language )
  const nums= [...new Set(l)].map(e => l.filter(leng => leng == e).length)
  return Math.max(...nums)/Math.min(...nums)<=2
};


var list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 43,
    language: "Ruby",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 95,
    language: "JavaScript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];

console.log(isLanguageDiverse(list1));
console.log(isLanguageDiverseUp(list1));
