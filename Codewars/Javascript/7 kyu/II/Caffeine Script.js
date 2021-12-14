function caffeineBuzz(n) {
  let resp = "mocha_missing!";
  if (n % 3==0) resp = "Java";
  if ((n % 3==0) && (n % 4==0)) resp = "Coffee";
  if ((resp != "mocha_missing!") && (n % 2==0)) resp += "Script";
  return resp;
}


console.log(caffeineBuzz(3));
console.log(caffeineBuzz(6));
console.log(caffeineBuzz(12));