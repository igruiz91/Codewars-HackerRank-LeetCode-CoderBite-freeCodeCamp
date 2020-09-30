function iqTest(numbers){
    let numero=0
    let contador=0
    numbers=numbers.split(' ').map(n=>+n)
    for (let i = 0; i < 3; i++) {
        if(esPar(numbers[i])){
            contador++
        }       
    }
    contador > 1 
    ? numero = Number(numbers.filter(numeros => !esPar(numeros)).join(''))
    : numero = Number(numbers.filter(numeros => esPar(numeros)).join(''))
    return numbers.indexOf(numero)+1
}

function esPar(n) {
    return(n%2==0)    
}

function iqTest2(numbers){
    numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    
    var odd = numbers.filter(function(el){ return el % 2 === 1});
    var even = numbers.filter(function(el){ return el % 2 === 0});
    
    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

//console.log(esPar(9));
console.log(iqTest("2 4 7 8 10"));