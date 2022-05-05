export function isReallyNaN(val: any): boolean {
  return Number.isNaN(val)
};


export function isReallyNanUp(val:any): boolean {
  return val != val
}


console.log(isReallyNaN(1))
console.log(isReallyNaN(NaN))
console.log(isReallyNanUp(1))
console.log(isReallyNanUp(NaN))