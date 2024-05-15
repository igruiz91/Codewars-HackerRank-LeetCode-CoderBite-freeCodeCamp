// Escribir una función clousure que
// aumente un contador en 1 cada vez que la función se llame

const clousure = (n) => {
  return ()=> n+=1
}


let contador = clousure(1)


console.log(contador())
console.log(contador())
