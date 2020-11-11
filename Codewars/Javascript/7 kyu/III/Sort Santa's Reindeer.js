function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));
}

let test = [
  "Dasher Tonoyan",
  "Dancer Moore",
  "Prancer Chua",
  "Vixen Hall",
  "Comet Karavani",
  "Cupid Foroutan",
  "Donder Jonker",
  "Blitzen Claus",
];
/* 
[
  "Prancer Chua",
  "Blitzen Claus",
  "Cupid Foroutan", 
  "Vixen Hall", 
  "Donder Jonker", 
  "Comet Karavani",
  "Dancer Moore", 
  "Dasher Tonoyan",
]
*/

console.log(sortReindeer(test));