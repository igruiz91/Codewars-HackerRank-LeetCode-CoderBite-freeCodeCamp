function evenOrOdd(str) {
  let resp= str.split('').reduce((a,b) => b%2 ? a+= -b : a+=+b, 0);
  return resp > 0
    ? "Even is greater than Odd"
    : resp < 0
    ? "Odd is greater than Even"
    : "Even and Odd are the same";
}


console.log(evenOrOdd("122"));
