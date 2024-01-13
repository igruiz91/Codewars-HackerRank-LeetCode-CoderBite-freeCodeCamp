function tArea(tStr) {
  let tArr  = tStr.trim().split('\n')
  let base  = (tArr[tArr.length-1].length-1)/2
  return (tArr.length-1)*base/2
}

const tAreaUp = (str) => {
  let side = str.split('\n').length-3
  return side*side/2
}


console.log(tArea("\n.\n. .\n. . .\n"), 2);
console.log(tAreaUp("\n.\n. .\n. . .\n"), 2);
// console.log(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'), 32)
