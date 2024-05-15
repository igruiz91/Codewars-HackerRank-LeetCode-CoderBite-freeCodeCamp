function reduce(fraction) {
  let a = Math.min(fraction[0], fraction[1]);
  while (a > 0) {
    if (fraction[0] % a == 0 && fraction[1] % a == 0) break;
    a--;
  }
  return [fraction[0] / a, fraction[1] / a];
}
