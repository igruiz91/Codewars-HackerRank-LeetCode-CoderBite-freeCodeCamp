function sentence(list) {
  return list.sort((a, b) => Object.keys(a) - Object.keys(b)).map((obj) => Object.values(obj)).join(' ')
}


console.log(
  sentence([
    { 4: "dog" },
    { 2: "took" },
    { 3: "his" },
    { "-2": "Vatsan" },
    { 5: "for" },
    { 6: "a" },
    { 12: "spin" },
  ])
);
