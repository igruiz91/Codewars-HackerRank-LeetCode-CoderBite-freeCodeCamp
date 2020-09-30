function differenceOfSquares(n){
    let suma=0;
    for(let i=1; i<=n; i++)
        suma+=i**2
    return (n*(n+1)/2)**2- suma
}

console.log(differenceOfSquares(10));