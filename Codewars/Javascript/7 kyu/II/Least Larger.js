function leastLarger(a, i) {
  let num = a[i]
  let searching= true
  if( num === Math.max(...a)) return -1
  while(searching){
    if(a.indexOf(num+=1)!=-1){
      found = false
      return a.indexOf(num);
    }
  }
}
// respuesta mas coherente
function leastLargerUp(a,i) {
  let larger = a.filter(n => n> a[i])
  return a.indexOf(Math.min(...larger))
}

//una linea y coherente
const leastLargerUp2 = (a, i) => {
  return a.indexOf(Math.min(...a.filter(n => n>a[i])))
};

console.log(leastLarger([-1, 9, -1, -7, -1, 9, 7, -8, 5, -8, 3, 2, 8], 10));
console.log(leastLargerUp([-1, 9, -1, -7, -1, 9, 7, -8, 5, -8, 3, 2, 8], 10));
console.log(leastLargerUp2([-1, 9, -1, -7, -1, 9, 7, -8, 5, -8, 3, 2, 8], 10));
//console.log(leastLarger([4, 1, 3, 5, 6], 0));
