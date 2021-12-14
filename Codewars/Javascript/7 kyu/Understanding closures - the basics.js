function buildFun(n) {
  var res = [];
  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}



console.log(buildFun(10)[0]());