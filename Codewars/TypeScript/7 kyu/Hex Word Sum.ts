export function hexWordSum(string: string): number {
   return string.replace(/O/g, '0').replace(/S/g, '5').split(" ").map(code => /^[0-9a-fA-F]+$/.test(code) ? parseInt(code, 16) : 0).reduce((acc, val) => acc + val, 0)
}

//
// console.log(hexWordSum("BAG"));
// console.log(hexWordSum("OF"));
// console.log(hexWordSum("BEES"));
//console.log(hexWordSum("BAG OF BEES"));
console.log(hexWordSum("DO YOU SEE THAT BEE DRINKING DECAF COFFEE"));
