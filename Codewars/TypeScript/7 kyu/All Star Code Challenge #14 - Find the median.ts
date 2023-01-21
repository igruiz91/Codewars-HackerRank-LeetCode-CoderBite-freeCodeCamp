export function median(n: number[]): number {
  n = n.sort((a,b) => a-b)
  let l = Math.floor(n.length/2)
  return n.length % 2 == 0 ? (n[l] + n[l - 1])/ 2 : n[l];
}


console.log(median([33, 99, 100, 30, 29, 50]));
console.log(median([3, 2, 1]));
