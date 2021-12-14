function sumOfIntegersInString(s) {
  return s.replace(/\D+/g,' ').split(' ').reduce((a,b) => a+ +b,0)
}

const sumOfIntegersInStringUp = (s) => {
  return s.match(/\d+/g).reduce((a,b) => +b+a,0)
};


console.log(sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'))
console.log(
  sumOfIntegersInStringUp(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  )
);
