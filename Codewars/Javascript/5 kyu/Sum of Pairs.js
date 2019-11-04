var sum_pairs = function (ints, s) {

    let resp = []
    if (ints.length > 30) ints = [...new Set(ints)]
    let min = ints.length
    for (let i = 0; i < min - 1; i++)
        for (let j = i + 1; j < min; j++)
            if ((ints[i] + ints[j] == s) && (j < min)) {
                min = j;
                if (min == 1) return [ints[i], ints[j]];
                resp.push([ints[i], ints[j]]);
            }
    return (resp.length == 1) ? resp[0] : (resp.length > 1) ? resp[resp.length - 1] : undefined
}

let sum_pairsUp = (a, s) => {
    let mem = {}
    for (x of a) {
        if (mem[s - x])
            return [s - x, x]
        else
            mem[x] = 1
        console.log(mem);
    }
}

var sum_pairsJack = function (ints, s) {
    const numbers = new Map();
    numbers.set(ints[0], 0);
    const combinacion = {
        numeros: [],
        diferencia: 99
    };

    for (let i = 1; i < ints.length; i++) {

        let numeroFaltante = s - ints[i];
        numeroEncontrado = numbers.get(numeroFaltante);

        if (numeroEncontrado) {

            let diferencia = i - numeroEncontrado;
            if (combinacion.diferencia > diferencia) {
                combinacion.numeros = [numeroFaltante, ints[i]];
                combinacion.diferencia = diferencia;

            }
        }
        numbers.set(ints[i], i)
    }
    return combinacion.numeros;
}


console.log(sum_pairsJack([1, 4, 8, 7, 3, 15], 8));