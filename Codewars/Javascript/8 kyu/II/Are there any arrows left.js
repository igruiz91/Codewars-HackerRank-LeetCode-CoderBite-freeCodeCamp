function anyArrows(arrows){
  // arrow it
  return arrows.some(({damaged}) => damaged === true ) 
}



let a = [
  { range: 5 },
  { range: 10, damaged: true },
  { damaged: true },
];

let b = [{range: 10, damaged: true}, {damaged: true}]

console.log(anyArrows(a))
console.log(anyArrows(b))