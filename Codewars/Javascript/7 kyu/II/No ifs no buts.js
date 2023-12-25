function noIfsNoButs(a, b) {
  let resp = (a > b && `${a} is greater than ${b}`) ||
    (a < b && `${a} is smaller than ${b}`) ||
    (`${a} is equal to ${b}`);
  return resp
}



console.log(noIfsNoButs(45, 51));
