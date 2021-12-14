function anyArrows(arrows){
  return arrows.some(e => e.damaged ? false : true );
}



let a = [
  { range: 5 },
  { range: 10, damaged: true },
  { damaged: true },
];

let b = [{range: 10, damaged: true}, {damaged: true}]

console.log(anyArrows(a))
console.log(anyArrows(b))