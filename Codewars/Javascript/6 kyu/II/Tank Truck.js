function tankvol(h, d, vt) {
  let r = d / 2;
  let l = vt / (r * r * Math.PI);
  let a = r * r * Math.acos(1 - h / r) - (r - h) * Math.sqrt(2 * r * h - h * h);

  return (l * a) | 0;
}
console.log(tankvol(5, 7, 3848));
