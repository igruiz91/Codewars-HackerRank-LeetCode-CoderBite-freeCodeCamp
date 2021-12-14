function isLucky(n) {
  return `${n}`.split('').reduce((a,b) => +b+a ,0)%9 == 0
}

const isLuckyUp = (n) => {
  return n%9==0
};



console.log(isLucky(1892376));
console.log(isLuckyUp(1892376));
