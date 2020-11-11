function calculate(num1, operation, num2) {
  try {
    resp = eval(`${num1} ${operation} ${num2}`);
    return isFinite(resp) ? resp : null 
  } catch (error) {
    return null;
  }
}

console.log(calculate(3.2, "+", 8));
