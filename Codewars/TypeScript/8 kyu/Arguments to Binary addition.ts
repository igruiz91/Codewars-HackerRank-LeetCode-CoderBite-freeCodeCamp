export function arr2bin(arr: any[]): string {
  return arr.reduce((a,b) => typeof(b)==='number' ? a+=b : a+=0 ,0).toString(2);
}



console.log(arr2bin([null]));
console.log(arr2bin([true, true, false, 15]));
console.log(arr2bin([1, 2]));
console.log(arr2bin([1, 2,3,4,5]));
