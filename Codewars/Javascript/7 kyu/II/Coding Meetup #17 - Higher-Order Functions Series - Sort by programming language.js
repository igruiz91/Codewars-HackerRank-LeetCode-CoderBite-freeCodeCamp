function sortByLanguage(list) {
  return list.sort((a, b) => {
    if (a.language > b.language) return 1;
    else if (a.language < b.language) return -1;
    else return a.firstName.localeCompare(b.firstName);
  });
}

const sortByLanguageUp = (list) => {
  return list.sort((a, b) =>
    a.language == b.language
      ? a.firstName.localeCompare(b.firstName)
      : a.language.localeCompare(b.language)
  );
};

var list1 = [
  {
    firstName: "Nikau",
    lastName: "R.",
    country: "New Zealand",
    continent: "Oceania",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Precious",
    lastName: "G.",
    country: "South Africa",
    continent: "Africa",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Maria",
    lastName: "S.",
    country: "Peru",
    continent: "Americas",
    age: 30,
    language: "C",
  },
  {
    firstName: "Agustin",
    lastName: "V.",
    country: "Uruguay",
    continent: "Americas",
    age: 19,
    language: "JavaScript",
  },
];
let test1 = sortByLanguage(list1);
let test2 = sortByLanguageUp(list1);
console.log(test1);
console.log(test2);
console.log(test1==test2)
