function staircase(n) {
    let contador=n-1;
    let caracter='#';
    for(let i=1;i<n+1;i++){
        console.log(' '.repeat(contador) + caracter.repeat(i));
        contador--
    }
    return null
}

staircase(6)