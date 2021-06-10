function calc(x) {
  return (x.replace(/./g, (x) => x.charCodeAt()).match(/7/g) || []).length*6;
}



//656667686970
//656661686910

console.log(calc('ABC'));
console.log(calc("abcdef"));
console.log(calc("ifkhchlhfd"));
