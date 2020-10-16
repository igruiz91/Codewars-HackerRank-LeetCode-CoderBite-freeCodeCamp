function repeats(arr) {
  return arr.filter((n, i, ar) => ar.lastIndexOf(n)==i && arr.indexOf(n) == i).reduce((a, b) => a+b)
}


// Modo correcto si el ultimo indice del numero es el mismo que el primer indice... para esto solo verificar si el lastIndexOf == indexOf
// ya que indexOf funciona con el pimer match y last de atras hacia adelante
const sumarRepetidos = (arr) => {
  return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a,b) => a+b)
}

const repeatsUp = (arr) => arr.reduce((acc, curr) => arr.indexOf(curr) == arr.lastIndexOf(curr) ? acc+curr :  acc , 0)

console.log(repeats([4, 5, 7, 5, 4, 8]));
console.log(sumarRepetidos([4, 5, 7, 5, 4, 8]));
console.log(repeatsUp([4, 5, 7, 5, 4, 8]));
