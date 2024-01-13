var fizzBuzzCustom = function (stringOne="Fizz", stringTwo="Buzz", numOne=3, numTwo=5) {
  let resp = []
  for(let i = 1; i <= 100; i++) {
    if(i%(numOne*numTwo)==0) resp.push(stringOne+stringTwo)
    else if(i%numOne==0) resp.push(stringOne)
    else if(i%numTwo==0) resp.push(stringTwo)
    else resp.push(i)
  }
  return resp
};


console.log(fizzBuzzCustom())
