function overTheRoad(address, n) {
  let index =
    address % 2 !== 0 ? Math.floor(address / 2) : n - Math.floor(address / 2); 
  return address%2 === 0 ? index*2+1 : n*2-index*2 
}


const overTheRoadUp = (address,n) => {
  return (n*2+1)-address
}


// console.log(overTheRoad(1,5))
// console.log(overTheRoad(9,5))
console.log(overTheRoad(6,5))
console.log(overTheRoadUp(6, 5));


/*
3, 5

1 10
3 8
5 6
7 4
9 2

*/