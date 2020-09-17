function valorMedio (inputArray) {
    console.log(`arreglo original: [${inputArray}]`);
    let mid = [...inputArray].sort((a,b)=>a-b)[1]
    
    console.log(`arreglo final: [${inputArray}]`);
    return inputArray.indexOf(mid)
};

//console.log(valorMedio([15, 22, -7]));

function valorMedio (inputArray) {
    let mid = inputArray.sort((a,b) => a-b)[1]
    return inputArray.indexOf(mid)
};

function valorMedio2(a) {
    return a.indexOf(a.concat().sort((a, b) => a - b )[1])
}



console.log(valorMedio2([15, 22, -7]));