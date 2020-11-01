function sayMeOperations(str) {
  let resp = ''
  str = str.split(' ')
  let calc = str[0];
  let op = ["+", "-", "*", "/"];
  for(let i=0, x=i+1; i<str.length-1; i++){
    for(let j =i+1; str.length; j++){
      console.log(calc, op[j], str[i], str[x])
      if (eval(`${calc} ${op[j]} ${str[i]}`) == str[x]) {
        resp += op[j]
        calc = eval(`${calc} ${op[j]} ${str[i]}`);
        break
      }
    }
    x++;
  }
  return resp
}

/* 
1) addition
2) subtraction
3) multiplication
4) division
*/

console.log(sayMeOperations("1 2 3 5 8"));
