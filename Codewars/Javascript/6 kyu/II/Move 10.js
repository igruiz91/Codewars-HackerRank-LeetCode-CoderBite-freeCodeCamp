function moveTen(s) {
  let abc = "abcdefghijklmnopqrstuvwxyzabcdefghij"
  return s.split("").map((c) => abc[abc.indexOf(c)+10]).join('');
}

console.log(moveTen("testcase"));
