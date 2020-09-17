function isPrime(n) {
    let primos = [2,3,5,7,11,13,17,19,23,29];
    if(n<2){
        return false
    }
    else if(primos.indexOf(n) > -1){
        return true;
    }else if(primos.some((primo) => (n%primo == 0))){
        return false;
    }else{
        if(n <= primos[primos.length-1]*2){
            return true;
        }else{
            let test = true;
            for(let i= primos[primos.length-1]+1; i<= Math.floor(n/2); i++){
                if(n %i==0){
                    test=false;
                    break;
                }
            }
            return test;
        }
    }
}

function isPrime(n) {
    //revisa si n es multiplo de 2
    if (n%2==0) return false;
    //si no, solo revisa los impares
    for(let i=3;i*i<=n;i+=2) {
        if(n%i==0)
            return false;
    }
    return true;
}

function isPrime(numero)
{
    if(numero<2) return false
    else
    {
        for(let x=2; x*x<=numero; x++)
        {
            if( numero%x==0 ){
                return false
            }
        }
    }
    return true;
}

let a=2;

console.log(isPrime(30097));
console.log(isPrime(73));
console.log(isPrime(24));
console.log(isPrime(5099));