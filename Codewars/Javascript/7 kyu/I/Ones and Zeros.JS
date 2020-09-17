const binaryArrayToNumber = arr => {
    return arr.reverse().reduce((acum,n,i) => acum + ( n>0 ? Math.pow(2,i) : 0))
};

//parseInt convierte de binario a decimal
const binaryArrayToNumber2 = arr => parseInt(arr.join(''),2);

console.log(binaryArrayToNumber2([1,1,1,0]));