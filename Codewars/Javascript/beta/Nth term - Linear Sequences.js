function nthTermOf(sequence) {
  a = sequence[1]-sequence[0];
  b = sequence[0]-a
  return `${a}n + ${b}`
}


console.log(nthTermOf([3, 5, 7, 9, 11]));
