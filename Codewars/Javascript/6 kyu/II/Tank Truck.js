function tankvol(h, d, vt) {
  const R = d/2;
  const A = R-h;
  const ang = Math.acos(A/R)
  return ang
}


console.log(tankvol(5, 7, 3848));
