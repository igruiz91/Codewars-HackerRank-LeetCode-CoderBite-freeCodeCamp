function isInterestingUp(number, awp) {
  const chars = n => `${n}`.split('')
  const match = s => n => new RegExp(n).test(s)

  const tests = [
    match("1234567890"),
    match("9876543210"),
    n => /^\d0+$/.test(n),
    n => chars(n).reverse().join("") == n,
    n => [...new Set(chars(n))].length === 1,
  ];

  const test = (n, awp) =>
    n > 99 && (awp.indexOf(n) > -1 || tests.map(fn => fn(n)).some((x) => !!x));


  return test(number, awp) ? 2 : +(test(number + 1, awp) || test(number + 2, awp));
}



function isInteresting(n, awesomePhrases) {
  console.log(n);
  var tests = [
    (n) => /^\d0+$/.test(n),
    (n) => /^(\d)\1+$/.test(n),
    (n) => RegExp(n).test(1234567890),
    (n) => RegExp(n).test(9876543210),
    (n) => `${n}`.split("").reverse().join("") == n,
    (n) => awesomePhrases.indexOf(n) > -1,
  ];
  var interesting = 0;
  tests.some((test) => {
    if (test(n) && n > 99) interesting = 2
    else if ((test(n + 1) && n > 98) || (test(n + 2) && n > 97))  interesting = 1
  });
  return interesting;
}



//console.log(isInterestingUp(11211,[]))
console.log(isInteresting(444, []));
console.log(isInteresting(999, []));