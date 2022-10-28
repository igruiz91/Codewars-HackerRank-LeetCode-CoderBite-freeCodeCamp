function cutCube(volume, n) {
  const isIntCube = (n) => { return Number.isInteger(Math.cbrt(n)) }
  return isIntCube(n) && isIntCube(volume/n)
}

const cutCubeUp = (vol,n) => {
  return !(Math.cbrt(n)%1) && !(Math.cbrt(vol/n)%1)
}

console.log(cutCubeUp(27, 27));
console.log(cutCubeUp(256, 8));
console.log(cutCubeUp(512, 64));
console.log(cutCubeUp(436, 16));
console.log(cutCubeUp(50000, 50));
