function solve(s,gdc){
    if(isPrime(gdc) && gdc!=3) return -1
    let gdcS= searchGDC(s-gdc).join()
    let gdcGDC = searchGDC(gdc).join('')
    if(!gdcS.match(`${gdcGDC}`)) return -1
    else return [gdc, s-gdc]
}

function isPrime(n){
    if(n<2) return true
    if(n % 2 == 0) return false
    for(let i = 2; i**i<=n; i++ )
      if(n%i == 0) return false
    return true
}

//console.log(isPrime(3));

function searchGDC(n) {
    var min=2
    let resp = []
    while(n>1){
        (n%min==0) ? (resp.push(min), n/=min) : min++
    }
    return resp
}

var x, y = 42;

console.log(x);

//console.log(searchGDC(209322 ));

console.log(solve(255489, 32));