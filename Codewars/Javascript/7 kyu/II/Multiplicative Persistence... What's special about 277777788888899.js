function per(n) {
  let resp = [];
  while (n > 9) {
    let mult = `${n}`.split("").reduce((acc, curr) => +curr * acc);
    resp.push(mult);
    n = mult;
  }
  return resp;
}

console.log(119 % 10);

console.log(per(69));
