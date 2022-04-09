function whatIsInAName(collection, source) {
  const keys = Object.keys(source);
  return collection.filter((obj) =>
    keys.every((key) => obj.hasOwnProperty(key) && obj[key] == source[key])
  );
}


const whatIsInANameUp = (collection, source) => { 
  return collection.filter(obj => {
    return Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  })
}



console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
console.log(
  whatIsInANameUp(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  })
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
