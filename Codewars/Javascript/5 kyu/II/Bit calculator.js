function calculate(num1, num2){
  const slpArr = (arr) => {
    return arr.split('').map(e=>+e).reverse().reduce((a,b,i) => b ? a + Math.pow(2,i) : a+0 , 0)
  }
  return slpArr(num1)+slpArr(num2)
}

const calculateUp = (n1,n2) => {
  const conv = (n) => n.split('').reverse().reduce((a,b,i) => a + Math.pow(2,i)*b,0)
  return conv(n1)+conv(n2)
};

const calculateUp2 = (n1,n2) => {
   
  return Number(`0b${n1}`)+Number(`0b${n2}`)
};




console.log(calculateUp2("1010", "1"));
// console.log(calculate("1","1"))
// console.log(calculateUp("1","1"))
// console.log(calculate("10","10"))
// console.log(calculateUp("10","10"))
// console.log(calculate("10", "0"));
// console.log(calculateUp("10", "0"));