let arreglo = [
    ["Enero 18", 100],
    ["Febrero 18", 200],
    ["Enero 18", 400],
    ["Febrero 18", 800],
    ["Marzo 19", 200],
    ["Marzo 15", 100],
    ['abril 14', 4000]

];

// Creamos un objeto donde totalizamos los valores por arreglo[0]
const totalizado = arreglo.reduce((acum, actual) => {
    if (!acum[actual[0]]) {
        acum[actual[0]] = actual[1];
    } else {
        acum[actual[0]] = acum[actual[0]] + actual[1];
    }

    return acum;
}, []);

// Visualizar resultado
console.log(totalizado);