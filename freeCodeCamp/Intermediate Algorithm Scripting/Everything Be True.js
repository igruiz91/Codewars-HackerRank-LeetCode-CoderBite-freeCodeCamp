function truthCheck(collection, pre) {
  return collection.every((e) => e[pre]);
}

let c = [
  { name: "Quincy", role: "Founder", isBot: false },
  { name: "Naomi", role: "", isBot: false },
  { name: "Camperbot", role: "Bot", isBot: true },
];

let c2 = [
  { name: "Quincy", role: "Founder", isBot: false },
  { name: "Naomi", role: "", isBot: false },
  { name: "Camperbot", role: "Bot", isBot: true },
];

console.log(truthCheck(c, "isBot"))
console.log(truthCheck(c2, "name"));
