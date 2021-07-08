function textin(s) {
  return s.replace(/two|too|to/gi, '2');
}

/* /t[wo]?o/gi */
const textinUp = (s) => s.replace(/two|too?/gi, '2')



console.log(textin("I love to text"));
console.log(textinUp("I love tooo text"));
