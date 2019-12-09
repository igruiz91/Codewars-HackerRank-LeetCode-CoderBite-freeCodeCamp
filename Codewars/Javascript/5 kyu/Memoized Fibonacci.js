var fibonacci = function(n) {
    var resp =[0,1];
    for(let i=2; i<=n; i++){
        let nuevo = resp.reduce((a,b)=>a+b)
        resp.push(nuevo)
        resp.shift()
    }
    return resp[1]
}

 console.log(fibonacci(70));