function shapeArea(n) {
  if(n==1) return 1
  else if(n==2) return 5
  else return shapeArea(n - 1) + (n - 1) * 4;
}

function shapeAreaUp(n) {
  return n*n + Math.pow(n-1,2)
  
}

console.log(shapeArea(5));
console.log(shapeAreaUp(5));

//shapeArea(1) = 1;   a-1=shapeArea(n-1)
//shapeArea(2) = 5;+4
//shapeArea(3) = 13;+8
//shapeArea(4) = 25;a-1+12
//shapeArea(5) = 41;a-1+16
//shapeArea(6) = 61;a-1+20
