function evenLast(numbers) {
  return numbers.reduce((a,b,i) => i%2==0 ? a+b : a, 0)
}


console.log(evenLast[2, 3, 4, 5])